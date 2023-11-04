from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Liquidacion, Factura, Detalle_factura, Alquiler, Pago
from .serializers import (
    FacturaSerializer,
    LiquidacionSerializer,
    DetalleFacturaSerializer,
    PagoSerializer,
    AlquilerSerializer
)