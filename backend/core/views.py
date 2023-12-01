from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import (
    Pais,
    Provincia,
    Ciudad,
    Direccion,
    TipoHabitacion,
    Servicio,
    Categoria,
    Vendedor,
    Encargado,
    Cliente,
)
from core.serializer.ubicacion import (
    PaisSerializer,
    ProvinciaSerializer,
    CiudadSerializer,
    DireccionSerializer,
)
from core.serializer.persona import (
    VendedorSerializer,
    VendedorFullSerializer,
    EncargadoSerializer,
    ClienteSerializer,
    ClienteFullSerializer,
)
from core.serializer.otro import (
    TipoHabitacionSerializer,
    ServicioSerializer,
    CategoriaSerializer,
)
from django_filters import rest_framework as filters
from .filters import ProvinciaFilter, CiudadFilter, EncargadoFilter


# -------------------- Ubicacion --------------------


class PaisViewSet(ModelViewSet):
    queryset = Pais.objects.all()
    serializer_class = PaisSerializer


class ProvinciaViewSet(ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProvinciaFilter


class CiudadViewSet(ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CiudadFilter


class DireccionViewSet(ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer


# -------------------- Otros --------------------


class TipoHabitacionViewSet(ModelViewSet):
    queryset = TipoHabitacion.objects.all()
    serializer_class = TipoHabitacionSerializer


class ServicioViewSet(ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer


class CategoriaViewSet(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


# -------------------- Persona --------------------


class VendedorViewSet(ModelViewSet):
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer

    @action(detail=False, serializer_class=VendedorSerializer)
    def mid(self, request):
        return super().list(request)

    @action(detail=True, url_path="mid", serializer_class=VendedorSerializer)
    def mid_detail(self, request, pk=None):
        return super().retrieve(request, pk)

    @action(detail=True, url_path="full", serializer_class=VendedorFullSerializer)
    def full(self, request, pk=None):
        return super().retrieve(request, pk)


class EncargadoViewSet(ModelViewSet):
    queryset = Encargado.objects.all()
    serializer_class = EncargadoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EncargadoFilter


class ClienteViewSet(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    @action(detail=True, url_path="full", serializer_class=ClienteFullSerializer)
    def full(self, request, pk=None):
        return super().retrieve(request, pk)
