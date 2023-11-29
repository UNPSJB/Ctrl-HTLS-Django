from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AlquilerViewSet

router = DefaultRouter()
router.register(r"alquileres", AlquilerViewSet, basename="alquiler")

urlpatterns = router.urls
