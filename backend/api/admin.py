from django.contrib import admin
from .hotel.model import Hotel
from .ubicacion.models import Pais, Provincia, Ciudad, Direccion


admin.site.register(Hotel)
admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Ciudad)
admin.site.register(Direccion)
