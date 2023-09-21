from django.db import models


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.nombre}, {self.direccion}"
