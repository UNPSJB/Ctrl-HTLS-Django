from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
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


# class ProvinciaViewSet(ModelViewSet):
#     queryset = Provincia.objects.all()
#     serializer_class = ProvinciaSerializer

#     # Filtrar las provincias por un país especificado
#     def get_queryset(self):
#         queryset = super().get_queryset()
#         pais_id = self.request.query_params.get("codigo", None)
#         if pais_id:
#             queryset = queryset.filter(pais_id=pais_id)
#         return queryset


# class CiudadViewSet(ModelViewSet):
#     queryset = Ciudad.objects.all()
#     serializer_class = CiudadSerializer

#     # Filtrar las ciudades por una provincia especificado
#     def get_queryset(self):
#         queryset = super().get_queryset()
#         provincia_id = self.request.query_params.get("provincia_id", None)
#         if provincia_id:
#             queryset = queryset.filter(provincia_id=provincia_id)
#         return queryset


class ProvinciaViewSet(ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

    def obtener_ciudades(self, request, pk=None):
        provincia = self.get_object()
        ciudades = provincia.obtener_ciudades()  # Utiliza el método personalizado
        serializer = CiudadSerializer(ciudades, many=True)
        return Response(serializer.data)


class CiudadViewSet(ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer


class DireccionViewSet(ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
