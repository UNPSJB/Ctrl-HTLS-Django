from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    Serializer,
)
from .models import (
    Pais,
    Provincia,
    Ciudad,
    Direccion,
    TipoHabitacion,
    Servicio,
    Categoria,
    Vendedor,
    Encargado,
    Cliente,
)
from hotel.models import HotelVendedor


# -------------------- Ubicacion --------------------


class PaisSerializer(ModelSerializer):
    class Meta:
        model = Pais
        fields = "__all__"


class ProvinciaSerializer(ModelSerializer):
    class Meta:
        model = Provincia
        fields = "__all__"


class CiudadSerializer(ModelSerializer):
    class Meta:
        model = Ciudad
        fields = "__all__"


class DireccionSerializer(ModelSerializer):
    class Meta:
        model = Direccion
        fields = "__all__"


# -------------------- Ubicacion Personalizados --------------------


# -------------------- Otros --------------------


class TipoHabitacionSerializer(ModelSerializer):
    class Meta:
        model = TipoHabitacion
        fields = "__all__"


class ServicioSerializer(ModelSerializer):
    class Meta:
        model = Servicio
        fields = "__all__"


class CategoriaFullSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"


# -------------------- Otros Personalizados --------------------


# Utilizado en HotelFullSerializer -> hotel/serializers.py
class CategoriaMidSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["nombre", "estrellas"]


# -------------------- Persona --------------------


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = "__all__"


class VendedorMidSerializer(ModelSerializer):
    hoteles = SerializerMethodField()

    class Meta:
        model = Vendedor
        fields = ["nombre", "apellido", "documento", "hoteles"]

    def get_hoteles(self, obj):
        return hoteles(obj)


class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = "__all__"


class ClienteSerializer(ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"


def hoteles(obj):
    hoteles = HotelVendedor.objects.filter(vendedor=obj)
    # return VendedorHotelSerializer(hoteles, many=True).data
    return "hola"
