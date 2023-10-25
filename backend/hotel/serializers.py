from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Hotel, Habitacion, HotelVendedor
from core.models import Categoria, Vendedor, Encargado, Direccion


class DireccionSerializer(ModelSerializer):
    class Meta:
        model = Direccion
        fields = ["calle", "numero"]


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["nombre"]


class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = ["documento", "nombre", "apellido"]


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["documento", "nombre", "apellido"]


class HotelVendedorSerializer(ModelSerializer):
    vendedor = VendedorSerializer()

    class Meta:
        model = HotelVendedor
        fields = ["vendedor"]


class HabitacionSerializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "hotel"]


class HotelSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelFullSerializer(ModelSerializer):
    direccion = DireccionSerializer()
    categoria = CategoriaSerializer()
    encargado = EncargadoSerializer()
    vendedores = SerializerMethodField()
    habitaciones = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            "id",
            "nombre",
            "direccion",
            "categoria",
            "encargado",
            "vendedores",
            "habitaciones",
        ]

    def get_vendedores(self, obj):
        vendedores = HotelVendedor.objects.filter(hotel=obj)
        return HotelVendedorSerializer(vendedores, many=True).data

    def get_habitaciones(self, obj):
        habitaciones = Habitacion.objects.filter(hotel=obj)
        return HabitacionSerializer(habitaciones, many=True).data
