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


class TarifaSerializer(serializers.Serializer):
    habitaciones = serializers.ListField(child=serializers.IntegerField())
    noches = serializers.IntegerField()

    def validate(self, data):
        habitaciones = data["habitaciones"]
        noches = data["noches"]
        total = 0
        for habitacion_id in habitaciones:
            habitacion = Habitacion.objects.get(id=habitacion_id)
            total += habitacion.precio * noches
        data["total"] = total
        return data
