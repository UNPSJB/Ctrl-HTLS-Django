import django_filters
from .models import Provincia


class ProvinciaFilter(django_filters.FilterSet):
    pais = django_filters.CharFilter(field_name="pais__codigo", lookup_expr="exact")

    class Meta:
        model = Provincia
        fields = []
