import django_filters
from .models import Hotel


class HotelFilter(django_filters.FilterSet):
    pais = django_filters.CharFilter(
        field_name="direccion__ciudad__provincia__pais__codigo", lookup_expr="exact"
    )

    class Meta:
        model = Hotel
        fields = []
