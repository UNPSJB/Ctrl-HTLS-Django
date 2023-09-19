from rest_framework.viewsets import ModelViewSet
from .serializer import HotelSerializer
from .model import Hotel


class HotelViewSet(ModelViewSet):
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        pais = self.request.query_params.get("pais", None)
        if pais is not None:
            queryset = queryset.filter(pais=pais)
        return queryset
