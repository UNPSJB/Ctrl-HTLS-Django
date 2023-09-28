from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PaisViewSet, ProvinciaViewSet, CiudadViewSet, DireccionViewSet

router = DefaultRouter()
router.register(r"pais", PaisViewSet, basename="pais")
router.register(r"provincia", ProvinciaViewSet, basename="provincia")
router.register(r"ciudad", CiudadViewSet, basename="ciudad")
router.register(r"direccion", DireccionViewSet, basename="direccion")

urlpatterns = router.urls
