from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Hotel, Habitacion, PaquetePromocional, Descuento, Temporada
from rest_framework.response import Response

from .serializers import (
    HotelSerializer,
    HabitacionSerializer,
    HotelMidSerializer,
    HotelFullSerializer,
    PaqueteSerializer,
    DescuentoSerializer,
    TemporadaSerializer,
    DisponibilidadSerializer,
    OfertaSerializer
)


from django_filters import rest_framework as filters
from .filters import HotelFilter


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = HotelFilter

    # Visualizar todos los datos de todos los hoteles
    @action(detail=False, serializer_class=HotelFullSerializer)
    def full(self, request):
        return super().list(request)

    # Visualizar todos los datos de un unico hotel
    @action(detail=True, url_path="full", serializer_class=HotelFullSerializer)
    def full_detail(self, request, pk=None):
        return super().retrieve(request, pk)

    @action(detail=False, serializer_class=HotelMidSerializer)
    def mid(self, request):
        return super().list(request)

    @action(detail=True, url_path="mid", serializer_class=HotelMidSerializer)
    def mid_detail(self, request, pk=None):
        return super().retrieve(request, pk)

    @action(detail=True, methods=['post'], serializer_class=DisponibilidadSerializer)
    def disponibilidad(self, request, pk=None):
        hotel = Hotel.objects.get(pk=pk)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            oferta = serializer.verificar(hotel)
            print(oferta)
            srlsOferta = OfertaSerializer(oferta)
            return Response(data=srlsOferta.data, status=200)
        return Response(data={'status': 'error', "errors": serializer.errors}, status=420)


class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer


class PaqueteViewSet(viewsets.ModelViewSet):
    queryset = PaquetePromocional.objects.all()
    serializer_class = PaqueteSerializer


class DescuentoViewSet(viewsets.ModelViewSet):
    queryset = Descuento.objects.all()
    serializer_class = DescuentoSerializer


class TemporadaViewSet(viewsets.ModelViewSet):
    queryset = Temporada.objects.all()
    serializer_class = TemporadaSerializer
