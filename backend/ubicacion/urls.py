from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaisViewSet, ProvinciaViewSet, CiudadViewSet, DireccionViewSet

router = DefaultRouter()
router.register(r"pais", PaisViewSet, basename="pais")
router.register(r"ciudad", CiudadViewSet, basename="ciudad")
router.register(r"direccion", DireccionViewSet, basename="direccion")

# Modificamos la ruta de ProvinciaViewSet para permitir el filtro por país
router.register(r"provincia", ProvinciaViewSet, basename="provincia")

urlpatterns = router.urls + [
    path(
        "provincia/<int:pk>/obtener_ciudades/",
        ProvinciaViewSet.as_view({"get": "obtener_ciudades"}),
        name="provincia-obtener-ciudades",
    ),
]
