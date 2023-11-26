from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField
from hotel.models import Hotel, HotelVendedor, Habitacion
from core.models import Vendedor
from hotel.serializer.otros import TemporadaSerializer, HabitacionSerializer
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

    class Meta(HotelMidSerializer.Meta):
        fields = HotelMidSerializer.Meta.fields + ["vendedores"]

    def get_vendedores(self, obj):
        vendedores = HotelVendedor.objects.filter(hotel=obj).values_list(
            "vendedor__documento", flat=True
        )
        return VendedorSerializer(
            Vendedor.objects.filter(documento__in=vendedores), many=True
        ).data


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
    habitaciones = serializers.SerializerMethodField()

    def validate(self, attrs):
        attrs = super().validate(attrs)
        return attrs

    def get_habitaciones(self, obj):
        habitaciones = Habitacion.objects.filter(hotel=obj)
        return HabitacionSerializer(habitaciones, many=True).data

    def create(self, validated_data):
        desde = validated_data["inicio"]
        hasta = validated_data["fin"]

        hoteles_serializados = HotelFullSerializer(self, many=True)
        return hoteles_serializados.data
