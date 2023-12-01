from rest_framework import serializers
from core.models import Persona, Vendedor, Encargado, Cliente
from venta.serializers import AlquilerSerializer


class PersonaSerializer(serializers.ModelSerializer):
    tipo_documento = serializers.CharField(source="tipo_documento_display")

    class Meta:
        model = Persona
        fields = "__all__"


class VendedorSerializer(PersonaSerializer):
    class Meta:
        model = Vendedor
        fields = "__all__"


class VendedorFullSerializer(serializers.ModelSerializer):
    alquileres = AlquilerSerializer(many=True, read_only=True)

    class Meta:
        model = Vendedor
        fields = [
            "tipo_documento",
            "documento",
            "nombre",
            "apellido",
            "correo",
            "telefono",
            "alquileres",
        ]


class EncargadoSerializer(PersonaSerializer):
    class Meta:
        model = Encargado
        fields = "__all__"


class ClienteSerializer(PersonaSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"


class ClienteFullSerializer(serializers.ModelSerializer):
    alquileres = AlquilerSerializer(many=True, read_only=True)

    class Meta:
        model = Cliente
        fields = [
            "tipo_documento",
            "documento",
            "nombre",
            "apellido",
            "correo",
            "telefono",
            "puntos",
            "alquileres",
        ]
