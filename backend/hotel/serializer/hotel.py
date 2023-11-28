from rest_framework import serializers
from hotel.models import Hotel
from hotel.serializer.otros import (
    TemporadaSerializer,
    HabitacionSerializer,
    PaqueteSerializer,
    PrecioPorTipoSerializer,
)
from core.serializer.ubicacion import UbicacionSerializer
from core.serializer.persona import EncargadoSerializer, VendedorSerializer
from core.serializer.otro import CategoriaSerializer
from collections import defaultdict


class HotelMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "encargado", "direccion", "categoria"]


class HotelSerializer(serializers.ModelSerializer):
    ubicacion = UbicacionSerializer(source="*", read_only=True)
    encargado = EncargadoSerializer()

    class Meta:
        model = Hotel
        fields = ["id", "nombre", "encargado", "ubicacion", "descripcion", "habilitado"]


class HotelMidSerializer(HotelSerializer):
    categoria = CategoriaSerializer()

    class Meta(HotelSerializer.Meta):
        fields = HotelSerializer.Meta.fields + ["categoria"]


class HotelSemiFullSerializer(HotelMidSerializer):
    vendedores = serializers.SerializerMethodField()
    habitaciones = HabitacionSerializer(many=True, read_only=True)
    paquetes = PaqueteSerializer(many=True, read_only=True)
    temporadas = TemporadaSerializer(many=True, read_only=True)
    tarifas = PrecioPorTipoSerializer(many=True, read_only=True)

    class Meta(HotelMidSerializer.Meta):
        fields = HotelMidSerializer.Meta.fields + [
            "vendedores",
            "habitaciones",
            "paquetes",
            "temporadas",
            "tarifas",
        ]

    def get_vendedores(self, obj):
        vendedores = obj.get_vendedores()
        return VendedorSerializer(vendedores, many=True).data


def agrupar_habitaciones_por_tipo(habitaciones):
    habitaciones_por_tipo = defaultdict(list)
    for habitacion in habitaciones:
        habitaciones_por_tipo[habitacion.tipo_habitacion.nombre].append(habitacion)
    return habitaciones_por_tipo


class HotelFullSerializer(HotelMidSerializer):
    vendedores = serializers.SerializerMethodField()
    habitaciones_disponibles = serializers.SerializerMethodField()
    paquetes_disponibles = serializers.SerializerMethodField()
    temporadas = serializers.SerializerMethodField()

    class Meta(HotelMidSerializer.Meta):
        fields = HotelMidSerializer.Meta.fields + [
            "vendedores",
            "habitaciones_disponibles",
            "paquetes_disponibles",
            "temporadas",
        ]

    def get_vendedores(self, obj):
        vendedores = obj.get_vendedores()
        return VendedorSerializer(vendedores, many=True).data

    def get_habitaciones_disponibles(self, obj):
        desde = self.context["inicio"]
        hasta = self.context["fin"]
        habitaciones_disponibles = obj.habitaciones_disponibles(desde, hasta)
        habitaciones_agrupadas = agrupar_habitaciones_por_tipo(habitaciones_disponibles)
        return [
            {
                "tipo": tipo,
                "habitaciones": HabitacionSerializer(habitaciones, many=True).data,
            }
            for tipo, habitaciones in habitaciones_agrupadas.items()
        ]

    def get_paquetes_disponibles(self, obj):
        desde = self.context["inicio"]
        hasta = self.context["fin"]
        flexible = self.context.get("flexible", False)
        paquetes_disponibles = obj.paquetes_disponibles(desde, hasta, flexible)
        return PaqueteSerializer(paquetes_disponibles, many=True).data

    def get_temporadas(self, obj):
        desde = self.context["inicio"]
        hasta = self.context["fin"]
        flexible = self.context.get("flexible", False)
        temporadas = obj.temporadas_disponibles(desde, hasta, flexible)
        return TemporadaSerializer(temporadas, many=True).data


class DisponibilidadSerializer(serializers.Serializer):
    localidad = serializers.CharField()
    inicio = serializers.DateTimeField()
    fin = serializers.DateTimeField()

    def validate(self, attrs):
        attrs = super().validate(attrs)
        return attrs

    def create(self, validated_data):
        localidad = validated_data["localidad"]
        desde = validated_data["inicio"]
        hasta = validated_data["fin"]

        hoteles = Hotel.objects.verificar_disponibilidad(desde, hasta, localidad)
        hoteles_serializados = HotelMidSerializer(hoteles, many=True)
        return hoteles_serializados.data


# Tener en cuanta que se ve igual que DisponibilidadSerializer
class HotelPostSerializer(serializers.Serializer):
    inicio = serializers.DateTimeField()
    fin = serializers.DateTimeField()

    def validate(self, attrs):
        attrs = super().validate(attrs)
        return attrs

    def create(self, validated_data):
        hotel = self.context["view"].get_object()
        hotel_serializado = HotelFullSerializer(hotel).data

        return hotel_serializado
