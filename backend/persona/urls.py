from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonaViewSet, EncargadoViewSet, VendedorViewSet

router = DefaultRouter()
router.register(r"encargados", EncargadoViewSet)
router.register(r"vendedores", VendedorViewSet)

urlpatterns = router.urls
