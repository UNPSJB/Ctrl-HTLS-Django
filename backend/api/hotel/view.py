from rest_framework.viewsets import ModelViewSet
from .serializer import HotelSerializer
from .model import Hotel


class HotelViewSet(ModelViewSet):
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()