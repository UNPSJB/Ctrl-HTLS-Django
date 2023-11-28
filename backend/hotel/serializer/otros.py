from rest_framework import serializers
from hotel.models import (
    Habitacion,
    PaquetePromocional,
    Temporada,
    Descuento,
    PrecioPorTipo,
)


class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = "__all__"


class PaqueteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaquetePromocional
        fields = "__all__"


class TemporadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Temporada
        fields = "__all__"


class DescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"


class PrecioPorTipoSerializer(serializers.ModelSerializer):
    tipohabitacion = serializers.SerializerMethodField()

    class Meta:
        model = PrecioPorTipo
        fields = ["tipohabitacion", "precio"]

    def get_tipohabitacion(self, obj):
        return obj.tipohabitacion.nombre
