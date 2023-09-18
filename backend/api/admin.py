from django.contrib import admin
from .hotel.model import Hotel
from .pais.model import Pais


admin.site.register(Hotel)
admin.site.register(Pais)