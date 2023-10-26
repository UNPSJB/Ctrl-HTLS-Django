from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Hotel, Habitacion
from .serializers import (
    HotelSerializer,
    HabitacionSerializer,
    HotelFullSerializer,
)


from django_filters import rest_framework as filters
from .filters import HotelFilter


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = HotelFilter

    # Visualizar todos los datos de todos los hoteles
    @action(detail=False)
    def full(self, request):
        instance = Hotel.objects.all()
        serializer = HotelFullSerializer(instance, many=True)
        return Response(serializer.data)

    # Visualizar todos los datos de un unico hotel
    @action(detail=True)
    def full_detail(self, request, pk=None):
        instance = self.get_object()
        serializer = HotelFullSerializer(instance)
        return Response(serializer.data)


class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer
