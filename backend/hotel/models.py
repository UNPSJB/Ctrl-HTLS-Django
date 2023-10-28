from django.db import models
from core.models import Direccion, TipoHabitacion, Categoria, Vendedor, Encargado


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)
    tipos_de_habitacion = models.ManyToManyField(TipoHabitacion)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, null=True)
    encargado = models.OneToOneField(Encargado, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        # Antes de guardar el hotel, verifica si tiene un encargado asignado
        # Si hay un encargado asignado, establece el campo de "encargado_asignado" en True
        if self.encargado:
            self.encargado.encargado_asignado = True
            self.encargado.save()  # Guarda el encargado con el nuevo valor
        super(Hotel, self).save(*args, **kwargs)


class Habitacion(models.Model):
    numero_de_habitacion = models.IntegerField()
    piso = models.IntegerField()
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipo_habitacion = models.ForeignKey(
        TipoHabitacion, on_delete=models.CASCADE, default=1
    )

    def __str__(self):
        return f"Habitacion {self.numero_de_habitacion} en el piso {self.piso}"


class HotelVendedor(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    vendedor = models.ForeignKey(Vendedor, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.hotel.nombre} - {self.vendedor.nombre}"


class PrecioPorTipo(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipohabitacion = models.ForeignKey(TipoHabitacion, on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.hotel.nombre} - {self.tipohabitacion.nombre}"


class PaquetePromocional(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    coeficiente_descuento = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.nombre


class Descuento(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    cantidad_habitaciones = models.IntegerField()
    porcentaje = models.DecimalField(max_digits=5, decimal_places=3)
    
    def __str__(self):
        return f"{self.hotel.nombre} - {self.cantidad_habitaciones}"
    
