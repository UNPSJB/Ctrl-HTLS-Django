from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Hotel, Habitacion, HotelVendedor
from core.models import Categoria, Vendedor


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["id", "nombre"]


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["documento", "nombre", "apellido"]


class HotelVendedorSerializer(ModelSerializer):
    vendedor = VendedorSerializer()

    class Meta:
        model = HotelVendedor
        fields = ["vendedor"]


class HotelSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelFullSerializer(ModelSerializer):
    categoria = CategoriaSerializer()
    vendedores = serializers.SerializerMethodField()

    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado", "vendedores"]

    def get_vendedores(self, obj):
        vendedores = HotelVendedor.objects.filter(hotel=obj)
        return HotelVendedorSerializer(vendedores, many=True).data


class HabitacionSerializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "precio", "hotel"]
