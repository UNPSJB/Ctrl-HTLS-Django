from django.db import models
from ubicacion.models import Direccion
from django.core.exceptions import ValidationError


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre}"


class TipoHabitacion(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    capacidad = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)

    def __str__(self):
        return f"Tipo de Habitacion {self.nombre} en el hotel {self.hotel.nombre}"


class Habitacion(models.Model):
    numero_de_habitacion = models.IntegerField()
    piso = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipo = models.ForeignKey(TipoHabitacion, on_delete=models.SET_NULL, null=True)

    # Verificar antes de guardar que el TipoHabitacion sea del mismo que Hotel que la Habitacion
    def save(self, *args, **kwargs):
        if self.tipo and self.hotel != self.tipo.hotel:
            raise ValidationError(
                "El TipoHabitacion debe pertenecer al mismo Hotel que la Habitacion"
            )
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Habitacion {self.numero_de_habitacion} en el piso {self.piso} del hotel {self.hotel.nombre}"
