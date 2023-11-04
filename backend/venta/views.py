from rest_framework.viewsets import ModelViewSet
from .models import Liquidacion, Factura, DetalleFactura, Alquiler, Pago
from .serializers import (
    FacturaSerializer,
    LiquidacionSerializer,
    DetalleFacturaSerializer,
    PagoSerializer,
    AlquilerSerializer,
)


class AlquilerViewSet(ModelViewSet):
    queryset = Alquiler.objects.all()
    serializer_class = AlquilerSerializer


class FacturaViewSet(ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer


class DetalleFacturaViewSet(ModelViewSet):
    queryset = DetalleFactura.objects.all()
    serializer_class = DetalleFacturaSerializer


class LiquidacionViewSet(ModelViewSet):
    queryset = Liquidacion.objects.all()
    serializer_class = LiquidacionSerializer


class PagoViewSet(ModelViewSet):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
