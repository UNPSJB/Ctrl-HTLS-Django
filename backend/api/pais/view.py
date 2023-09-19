from rest_framework.viewsets import ModelViewSet
from .serializer import PaisSerializer
from .model import Pais


class PaisViewSet(ModelViewSet):
    serializer_class = PaisSerializer
    queryset = Pais.objects.all()
