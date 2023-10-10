from rest_framework import serializers
from .models import Hotel, Habitacion, TipoHabitacion


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["nombre", "direccion"]


class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "precio", "hotel"]


class TipoHabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoHabitacion
        fields = ["nombre", "descripcion", "capacidad", "precio", "hotel"]
