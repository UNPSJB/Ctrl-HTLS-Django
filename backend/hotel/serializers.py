from rest_framework import serializers
from .models import Hotel, Habitacion
from core.models import Categoria, Vendedor


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["id", "nombre"]


class VendedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["id", "Nombre"]


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelFullSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    vendedor = VendedorSerializer()

    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado", "vendedor"]


class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "precio", "hotel"]
