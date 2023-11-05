from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Hotel, Habitacion, HotelVendedor, PaquetePromocional, Descuento, Temporada
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

    class Meta:
        model = Hotel
        fields = [
            "id",
            "nombre",
            "direccion",
            "categoria",
            "encargado",
            "vendedores",
        ]

    def get_vendedores(self, obj):
        vendedores = HotelVendedor.objects.filter(hotel=obj)
        return HotelVendedorSerializer(vendedores, many=True).data


class PaqueteSerializer(ModelSerializer):
    class Meta:
        model = PaquetePromocional
        fields = "__all__"


class DescuentoSerializer(ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"
        
class TemporadaSerializer(ModelSerializer):
    class Meta:
        model = Temporada
        fields = "__all__"
        
