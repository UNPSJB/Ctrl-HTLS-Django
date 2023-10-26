from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HotelViewSet, HabitacionViewSet, PaqueteViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)
router.register(r"habitaciones", HabitacionViewSet)
router.register(r"paquetes", PaqueteViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path(
        "hoteles/<int:pk>/full/",
        HotelViewSet.as_view({"get": "full_detail"}),
    ),
]
