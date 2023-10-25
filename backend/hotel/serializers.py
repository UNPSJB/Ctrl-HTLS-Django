from rest_framework.serializers import ModelSerializer
from .models import Hotel, Habitacion, HotelVendedor
from core.models import Categoria, Vendedor


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["id", "nombre"]


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = HotelVendedor
        fields = ["id", "Nombre"]


class HotelSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelFullSerializer(ModelSerializer):
    categoria = CategoriaSerializer()
    vendedor = VendedorSerializer()

    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado", "vendedor"]


class HabitacionSerializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "precio", "hotel"]
