from django.db import models
from hotel.models import Hotel


class Alquiler(models.Model):
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    pasajeros = models.IntegerField()
    # importe = coeficiente_descuento = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.importe
