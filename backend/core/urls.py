from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PaisViewSet, ProvinciaViewSet, CiudadViewSet, DireccionViewSet

router = DefaultRouter()
router.register(r"paises", PaisViewSet, basename="pais")
router.register(r"provincias", ProvinciaViewSet, basename="provincia")
router.register(r"ciudades", CiudadViewSet, basename="ciudad")
router.register(r"direcciones", DireccionViewSet, basename="direccion")


urlpatterns = router.urls
