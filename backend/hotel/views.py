from rest_framework import viewsets
from .models import Hotel, Habitacion, TipoHabitacion
from .serializers import HotelSerializer, HabitacionSerializer, TipoHabitacionSerializer


from django_filters import rest_framework as filters
from .filters import HotelFilter


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = HotelFilter


# class HotelViewSet(viewsets.ModelViewSet):
#     queryset = Hotel.objects.all()
#     serializer_class = HotelSerializer


class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer


class TipoHabitacionViewSet(viewsets.ModelViewSet):
    queryset = TipoHabitacion.objects.all()
    serializer_class = TipoHabitacionSerializer
