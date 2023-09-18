from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .hotel.view import HotelViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]