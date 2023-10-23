from rest_framework import serializers
from .models import Hotel, Habitacion
from core.models import Categoria


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["id", "nombre"]

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]

class HotelFullSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "precio", "hotel"]
