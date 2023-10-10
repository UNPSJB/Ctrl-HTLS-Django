from django.db import models
from ubicacion.models import Direccion


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre}, {self.direccion}"


class Habitacion(models.Model):
    numero_de_habitacion = models.IntegerField()
    piso = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)

    def __str__(self):
        return f"Habitacion {self.numero_de_habitacion} en el piso {self.piso} del hotel {self.hotel.nombre}"


class TipoHabitacion(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    capacidad = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)

    def __str__(self):
        return f"Tipo de Habitacion {self.nombre} en el hotel {self.hotel.nombre}"
