from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HotelViewSet

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)

urlpatterns = router.urls
