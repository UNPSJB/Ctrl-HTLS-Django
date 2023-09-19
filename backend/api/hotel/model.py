from django.db import models
from api.pais.model import Pais


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE, default="AR")

    def __str__(self):
        return f"{self.nombre}, {self.direccion}"
