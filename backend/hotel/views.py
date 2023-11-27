from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters import rest_framework as filters
from .filters import HotelFilter
from .models import Hotel, Habitacion, PaquetePromocional, Descuento, Temporada

from hotel.serializer.hotel import (
    HotelFullSerializer,
    DisponibilidadSerializer,
    HotelPostSerializer,
    HotelSerializer,
    HabitacionSerializer,
    HotelMidSerializer,
    HotelMiniSerializer
)

from hotel.serializer.otros import (
    PaqueteSerializer,
    DescuentoSerializer,
    TemporadaSerializer,
)

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelMiniSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = HotelFilter

    # Visualizar todos los datos de todos los hoteles
    @action(detail=False, serializer_class=HotelFullSerializer)
    def full(self, request):
        return super().list(request)

    # Visualizar todos los datos de un unico hotel
    @action(
        detail=True,
        methods=["get", "post"],
        url_path="full",
        serializer_class=HotelFullSerializer,
    )
    def full_detail(self, request, pk=None):
        if request.method == "POST":
            serializer = HotelPostSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            hotel = self.get_object()
            return Response(
                HotelFullSerializer(
                    hotel,
                    context={
                        "inicio": serializer.validated_data["inicio"],
                        "fin": serializer.validated_data["fin"],
                    },
                ).data
            )
        else:
            return super().retrieve(request, pk)

    @action(detail=False, serializer_class=HotelMidSerializer)
    def mid(self, request):
        return super().list(request)

    @action(detail=True, url_path="mid", serializer_class=HotelMidSerializer)
    def mid_detail(self, request, pk=None):
        return super().retrieve(request, pk)

    @action(detail=False, methods=["post"], serializer_class=DisponibilidadSerializer)
    def disponibilidad(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        hoteles_serializados = serializer.save()
        return Response(hoteles_serializados)


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
