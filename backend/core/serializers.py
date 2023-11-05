from rest_framework.serializers import ModelSerializer
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


# Utilizado en HotelFullSerializer -> hotel/serializers.py
class DireccionSerializer(ModelSerializer):
    class Meta:
        model = Direccion
        fields = ["calle", "numero", "ciudad"]


class PaisMidSerializer(ModelSerializer):
    class Meta:
        model = Pais
        fields = ["nombre"]


class ProvinciaMidSerializer(ModelSerializer):
    pais = PaisMidSerializer()

    class Meta:
        model = Provincia
        fields = ["nombre", "pais"]


class CiudadMidSerializer(ModelSerializer):
    provincia = ProvinciaMidSerializer()

    class Meta:
        model = Ciudad
        fields = ["nombre", "codigo_postal", "provincia"]


class DireccionMidSerializer(ModelSerializer):
    ciudad = CiudadMidSerializer()

    class Meta:
        model = Direccion
        fields = ["calle", "numero", "ciudad"]


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
class CategoriaFullSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["nombre", "estrellas"]


class CategoriaMidSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["estrellas"]


class TipoHabitacionSerializer(ModelSerializer):
    class Meta:
        model = TipoHabitacion
        fields = "__all__"


# -------------------- Persona --------------------


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = "__all__"


class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = "__all__"


class ClienteSerializer(ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"


# -------------------- Persona Personalizados --------------------


# Utilizado en HotelFullSerializer -> hotel/serializers.py
class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = ["documento", "nombre", "apellido"]


# Utilizado en HotelFullSerializer -> hotel/serializers.py
class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["documento", "nombre", "apellido"]
