from django.urls import path, include
from rest_framework.routers import DefaultRouter
<<<<<<< HEAD
from .views import HotelViewSet, HabitacionViewSet, PaqueteViewSet, DescuentoViewSet, TemporadaViewSet
=======
from .views import (
    HotelViewSet,
    HabitacionViewSet,
    PaqueteViewSet,
    DescuentoViewSet,
    TemporadaViewSet,
)
>>>>>>> develop

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)
router.register(r"habitaciones", HabitacionViewSet)
router.register(r"paquetes", PaqueteViewSet)
router.register(r"descuentos", DescuentoViewSet)
router.register(r"temporadas", TemporadaViewSet)
<<<<<<< HEAD

=======
>>>>>>> develop

urlpatterns = [
    path("", include(router.urls)),
]
