from rest_framework.serializers import ModelSerializer
from .models import Pais, Provincia, Ciudad, Direccion


class PaisSerializer(ModelSerializer):
    class Meta:
        model = Pais
        fields = ["codigo", "nombre"]


class ProvinciaSerializer(ModelSerializer):
    class Meta:
        model = Provincia
        fields = ["nombre", "pais"]


class CiudadSerializer(ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ["nombre", "codigo_postal", "provincia"]


class DireccionSerializer(ModelSerializer):
    class Meta:
        model = Direccion
        fields = ["calle", "numero", "ciudad"]
