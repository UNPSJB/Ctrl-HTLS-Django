from django.contrib import admin
from .models import (
    Pais,
    Provincia,
    Ciudad,
    Direccion,
    TipoHabitacion,
    Servicio,
    Categoria,
)


admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Ciudad)
admin.site.register(Direccion)
admin.site.register(TipoHabitacion)
admin.site.register(Servicio)
admin.site.register(Categoria)
