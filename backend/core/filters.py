import django_filters
from .models import Provincia, Ciudad, Encargado


# -------------------- Ubicacion --------------------


class ProvinciaFilter(django_filters.FilterSet):
    pais = django_filters.CharFilter(field_name="pais__codigo", lookup_expr="exact")

    class Meta:
        model = Provincia
        fields = []


class CiudadFilter(django_filters.FilterSet):
    provincia = django_filters.CharFilter(
        field_name="provincia__id", lookup_expr="exact"
    )

    class Meta:
        model = Ciudad
        fields = []


# -------------------- Persona --------------------


class EncargadoFilter(django_filters.FilterSet):
    encargado_asignado = django_filters.BooleanFilter(
        field_name="encargado_asignado", lookup_expr="exact"
    )

    class Meta:
        model = Encargado
        fields = []
