from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .hotel.view import HotelViewSet
from .pais.view import PaisViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)
router.register(r"paises", PaisViewSet)

urlpatterns = [
    path("", include(router.urls)),
]