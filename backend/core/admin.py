from django.contrib import admin
from .models import (
    Pais,
    Provincia,
    Ciudad,
    Direccion,
    TipoHabitacion,
    Servicio,
    Categoria,
    Vendedor,
    Encargado,
    Cliente,
)


admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Ciudad)
admin.site.register(Direccion)
admin.site.register(TipoHabitacion)
admin.site.register(Servicio)
admin.site.register(Categoria)
admin.site.register(Vendedor)
admin.site.register(Encargado)
admin.site.register(Cliente)
