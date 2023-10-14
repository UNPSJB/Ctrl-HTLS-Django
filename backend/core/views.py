from rest_framework.viewsets import ModelViewSet
from .models import Pais, Provincia, Ciudad, Direccion
from .serializers import (
    PaisSerializer,
    ProvinciaSerializer,
    CiudadSerializer,
    DireccionSerializer,
)
from django_filters import rest_framework as filters
from .filters import ProvinciaFilter, CiudadFilter


class PaisViewSet(ModelViewSet):
    queryset = Pais.objects.all()
    serializer_class = PaisSerializer


class ProvinciaViewSet(ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProvinciaFilter


class CiudadViewSet(ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CiudadFilter


class DireccionViewSet(ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
