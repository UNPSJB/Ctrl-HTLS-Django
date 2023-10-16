from rest_framework import serializers
from .models import Pais, Provincia, Ciudad, Direccion, TipoHabitacion


# -------------------- Ubicacion --------------------


class PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais
        fields = "__all__"


class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = "__all__"


class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = "__all__"


class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = "__all__"


# -------------------- Otros --------------------


class TipoHabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoHabitacion
        fields = "__all__"
