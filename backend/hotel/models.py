from django.db import models
from core.models import Direccion, TipoHabitacion, Categoria, Vendedor, Encargado
from django.core.validators import MinValueValidator
from decimal import Decimal
from PIL import Image


class Hotel(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)
    descripcion = models.TextField(blank=True)
    habilitado = models.BooleanField(default=False)
    tipos_de_habitacion = models.ManyToManyField(TipoHabitacion)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, null=True)
    encargado = models.OneToOneField(Encargado, on_delete=models.SET_NULL, null=True)
    imagen = models.ImageField(
        upload_to="./fixtures/img/hoteles", blank=True, null=True
    )
    estado = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        # Antes de guardar el hotel, verifica si tiene un encargado asignado
        # Si hay un encargado asignado, establece el campo de "encargado_asignado" en True
        if self.encargado:
            self.encargado.encargado_asignado = True
            self.encargado.save()  # Guarda el encargado con el nuevo valor
        super(Hotel, self).save(*args, **kwargs)


class PaquetePromocional(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    coeficiente_descuento = models.DecimalField(
        max_digits=5, decimal_places=2, validators=[MinValueValidator(Decimal("0"))]
    )

    def __str__(self):
        return self.nombre


class Habitacion(models.Model):
    numero_de_habitacion = models.PositiveIntegerField()
    piso = models.PositiveIntegerField()
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipo_habitacion = models.ForeignKey(TipoHabitacion, on_delete=models.CASCADE)
    paquete = models.ForeignKey(
        PaquetePromocional, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return f"Habitacion {self.numero_de_habitacion} ({self.tipo_habitacion}). Hotel {self.hotel}"

    def habitacion_disponible(self, inicio, fin, flexible=False):
        disponible = not self.alquileres.filter(
            fecha_fin__lt=inicio, fecha_inicio__gt=fin
        ).exists()
        if flexible:
            # TODO: Flexibilidad al seleccionar alquileres, si se superpone con
            # alquileres por unos dias pero no el total del rango inicio fin retornar True
            pass
        return disponible


class HotelVendedor(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    vendedor = models.ForeignKey(Vendedor, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.hotel.nombre} - {self.vendedor.nombre}"


class PrecioPorTipo(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipohabitacion = models.ForeignKey(TipoHabitacion, on_delete=models.CASCADE)
    precio = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(Decimal("0.01"))]
    )

    def __str__(self):
        return f"{self.hotel.nombre} - {self.tipohabitacion.nombre}"


class Descuento(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    cantidad_habitaciones = models.IntegerField()
    porcentaje = models.DecimalField(max_digits=5, decimal_places=3)

    def __str__(self):
        return f"Hotel {self.hotel.nombre} - Cant. Habitaciones {self.cantidad_habitaciones} - Porcentaje {self.porcentaje}"


class Temporada(models.Model):
    ALTA = 0
    BAJA = 1
    TIPOS_TEMPORADA = ((ALTA, "Alta"), (BAJA, "Baja"))
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipo = models.PositiveSmallIntegerField(choices=TIPOS_TEMPORADA)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    porcentaje = models.DecimalField(
        max_digits=5, decimal_places=2
    )  # Si es menor a 1 es un descuento aplicable, sino corresponde a aumento

    def __str__(self):
        return f"Hotel {self.hotel} - Temporada {self.tipo} - Desde dia {self.fecha_inicio} hasta {self.fecha_fin}"
