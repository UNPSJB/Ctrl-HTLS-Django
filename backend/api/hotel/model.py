from django.db import models
from api.ubicacion.models import Direccion


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.ForeignKey(Direccion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre}, {self.direccion}"
