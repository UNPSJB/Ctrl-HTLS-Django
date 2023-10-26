from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HotelViewSet, HabitacionViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)
router.register(r"habitaciones", HabitacionViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path(
        "hoteles/<int:pk>/full/",
        HotelViewSet.as_view({"get": "full_detail"}),
    ),
]
