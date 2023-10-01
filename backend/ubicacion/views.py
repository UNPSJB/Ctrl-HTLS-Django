from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
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

    @action(detail=True, methods=["get"])
    def obtener_provincias(self, request, pk=None):
        pais = self.get_object()
        provincias = pais.obtener_provincias()
        serializer = ProvinciaSerializer(provincias, many=True)
        return Response(serializer.data)


class ProvinciaViewSet(ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

    @action(detail=True, methods=["get"])
    def obtener_ciudades(self, request, pk=None):
        provincia = self.get_object()
        ciudades = provincia.obtener_ciudades()
        serializer = CiudadSerializer(ciudades, many=True)
        return Response(serializer.data)


class CiudadViewSet(ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer


class DireccionViewSet(ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
