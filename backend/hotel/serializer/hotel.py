from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField
from hotel.models import Hotel, HotelVendedor, Habitacion
from core.models import Vendedor
from hotel.serializer.otros import (
    TemporadaSerializer,
    HabitacionSerializer,
    PaqueteSerializer,
)
from core.serializer.ubicacion import UbicacionSerializer
from core.serializer.persona import EncargadoSerializer, VendedorSerializer
from core.serializer.otro import CategoriaSerializer


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
        return HabitacionSerializer(habitaciones_disponibles, many=True).data

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
