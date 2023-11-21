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
    OfertaSerializer,
)


from django_filters import rest_framework as filters
from .filters import HotelFilter


from datetime import datetime
from django.db.models import Q
from django.utils.timezone import make_aware
from rest_framework.response import Response


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

    # @action(detail=True, methods=["post"], serializer_class=DisponibilidadSerializer)
    # def disponibilidad(self, request, pk=None):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     disp = serializer.save(hotel=self.get_object())
    #     serializer = OfertaSerializer(disp)
    #     return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def disponibilidad(self, request):
        try:
            fecha_inicio = make_aware(
                datetime.strptime(
                    request.query_params.get("fecha_inicio"), "%Y-%m-%dT%H:%M:%S.%fZ"
                )
            )
            fecha_fin = make_aware(
                datetime.strptime(
                    request.query_params.get("fecha_fin"), "%Y-%m-%dT%H:%M:%S.%fZ"
                )
            )
        except Exception as e:
            return Response({"error": "Formato de fecha inválido."}, status=400)

        alquileres = Alquiler.objects.filter(
            Q(fecha_inicio__lte=fecha_inicio, fecha_fin__gte=fecha_inicio)
            | Q(fecha_inicio__lte=fecha_fin, fecha_fin__gte=fecha_fin)
            | Q(fecha_inicio__gte=fecha_inicio, fecha_fin__lte=fecha_fin)
        )

        habitaciones_ocupadas = Habitacion.objects.filter(alquileres__in=alquileres)
        paquetes_ocupados = PaquetePromocional.objects.filter(
            habitaciones__in=habitaciones_ocupadas
        )

        hoteles_disponibles = Hotel.objects.exclude(
            Q(habitacion__in=habitaciones_ocupadas)
            | Q(paquetepromocional__in=paquetes_ocupados)
        ).distinct()

        serializer = HotelSerializer(hoteles_disponibles, many=True)
        return Response(serializer.data)


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
