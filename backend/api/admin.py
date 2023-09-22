from django.contrib import admin
from .hotel.model import Hotel
from .ubicacion.models import Pais, Provincia, Ciudad, Direccion
from .persona.models import Encargado, Vendedor


admin.site.register(Hotel)
admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Ciudad)
admin.site.register(Direccion)
admin.site.register(Encargado)
admin.site.register(Vendedor)
