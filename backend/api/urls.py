from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.response import Response
from rest_framework.views import APIView
from .hotel.view import HotelViewSet
from .ubicacion.views import (
    PaisViewSet,
    ProvinciaViewSet,
    CiudadViewSet,
    DireccionViewSet,
)

router = DefaultRouter()
router.register(r"hoteles", HotelViewSet)

router_ubicacion = DefaultRouter()
router_ubicacion.register(r"paises", PaisViewSet)
router_ubicacion.register(r"provincias", ProvinciaViewSet)
router_ubicacion.register(r"ciudades", CiudadViewSet)
router_ubicacion.register(r"direccion", DireccionViewSet)


class ApiRoot(APIView):
    def get(self, request):
        return Response(
            {
                "hoteles": "http://127.0.0.1:8000/api/hoteles/",
                "ubicaciones": "http://127.0.0.1:8000/api/ubicaciones/",
            }
        )


urlpatterns = [
    path("", ApiRoot.as_view(), name="api-root"),
    path("", include(router.urls)),
    path("ubicaciones/", include(router_ubicacion.urls)),
]
