from django.contrib import admin
from .models import Pais, Provincia, Ciudad, Direccion

admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Ciudad)
admin.site.register(Direccion)
