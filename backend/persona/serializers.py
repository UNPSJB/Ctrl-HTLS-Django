from rest_framework.serializers import ModelSerializer
from .models import Persona, Encargado, Vendedor


class PersonaSerializer(ModelSerializer):
    class Meta:
        model = Persona
        fields = ["documento", "nombre", "apellido"]


class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = ["documento", "nombre", "apellido"]


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["documento", "nombre", "apellido"]
