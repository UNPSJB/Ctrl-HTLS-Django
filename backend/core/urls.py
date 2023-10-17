from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    PaisViewSet,
    ProvinciaViewSet,
    CiudadViewSet,
    DireccionViewSet,
    TipoHabitacionViewSet,
    ServicioViewSet,
    CategoriaViewSet,
)

router = DefaultRouter()
router.register(r"paises", PaisViewSet, basename="pais")
router.register(r"provincias", ProvinciaViewSet, basename="provincia")
router.register(r"ciudades", CiudadViewSet, basename="ciudad")
router.register(r"direcciones", DireccionViewSet, basename="direccion")
router.register(r"tiposhabitaciones", TipoHabitacionViewSet, basename="tiposhabitacion")
router.register(r"servicios", ServicioViewSet, basename="servicio")
router.register(r"categoria", CategoriaViewSet, basename="categoria")


urlpatterns = router.urls
