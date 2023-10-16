from django.db import models
from core.models import Direccion, TipoHabitacion


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)
    tipos_de_habitacion = models.ManyToManyField(TipoHabitacion)

    def __str__(self):
        return self.nombre


class Habitacion(models.Model):
    numero_de_habitacion = models.IntegerField()
    piso = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)

    def __str__(self):
        return f"Habitacion {self.numero_de_habitacion} en el piso {self.piso}"
