from django.db import models
from hotel.models import Hotel


class Persona(models.Model):
    documento = models.CharField(max_length=20, primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Encargado(Persona):
    hotel = models.OneToOneField(Hotel, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Vendedor(Persona):
    pass

    def __str__(self):
        return f"{self.nombre} {self.apellido}, Vendedor"
