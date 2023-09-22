from django.db import models
from api.hotel.model import Hotel


class Persona(models.Model):
    documento = models.CharField(max_length=20, primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Encargado(Persona):
    hotel = models.OneToOneField(Hotel, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}, Encargado del hotel {self.hotel.nombre}"


class Vendedor(Persona):
    pass

    def __str__(self):
        return f"{self.nombre} {self.apellido}, Vendedor"
