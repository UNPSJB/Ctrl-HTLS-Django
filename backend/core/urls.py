from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    PaisViewSet,
    ProvinciaViewSet,
    CiudadViewSet,
    DireccionViewSet,
    TipoHabitacionViewSet,
    ServicioViewSet,
    CategoriaViewSet,
    VendedorViewSet,
    EncargadoViewSet,
    ClienteViewSet,
)

router = DefaultRouter()
router.register(r"paises", PaisViewSet, basename="pais")
router.register(r"provincias", ProvinciaViewSet, basename="provincia")
router.register(r"ciudades", CiudadViewSet, basename="ciudad")
router.register(r"direcciones", DireccionViewSet, basename="direccion")
router.register(
    r"tiposhabitaciones", TipoHabitacionViewSet, basename="tiposhabitaciones"
)
router.register(r"servicios", ServicioViewSet, basename="servicio")
router.register(r"categorias", CategoriaViewSet, basename="categorias")
router.register(r"vendedores", VendedorViewSet, basename="vendedores")
router.register(r"encargados", EncargadoViewSet, basename="encargados")
router.register(r"clientes", ClienteViewSet, basename="clientes")

urlpatterns = router.urls
