from rest_framework import viewsets
from .models import Hotel, Habitacion
from .serializers import HotelSerializer, HabitacionSerializer


from django_filters import rest_framework as filters
from .filters import HotelFilter


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = HotelFilter


class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer
