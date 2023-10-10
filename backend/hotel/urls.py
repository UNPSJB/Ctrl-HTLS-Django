from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HotelViewSet, HabitacionViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)
router.register(r"habitaciones", HabitacionViewSet)
router.register(r"tiposhabitacion", HabitacionViewSet)

urlpatterns = router.urls
