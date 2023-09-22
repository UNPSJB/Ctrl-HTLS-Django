from rest_framework.viewsets import ModelViewSet
from .models import Pais, Provincia, Ciudad, Direccion
from .serializers import (
    PaisSerializer,
    ProvinciaSerializer,
    CiudadSerializer,
    DireccionSerializer,
)


class PaisViewSet(ModelViewSet):
    queryset = Pais.objects.all()
    serializer_class = PaisSerializer


class ProvinciaViewSet(ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer


class CiudadViewSet(ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer


class DireccionViewSet(ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
