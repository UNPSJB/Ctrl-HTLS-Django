from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Hotel, Habitacion, PaquetePromocional, Descuento, Temporada
from .serializers import (
    HotelSerializer,
    HabitacionSerializer,
    HotelMidSerializer,
    HotelFullSerializer,
    PaqueteSerializer,
    DescuentoSerializer,
    TemporadaSerializer,
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
