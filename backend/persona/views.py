from rest_framework.viewsets import ModelViewSet
from .models import Persona, Encargado, Vendedor
from .serializers import PersonaSerializer, EncargadoSerializer, VendedorSerializer


class PersonaViewSet(ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer


class EncargadoViewSet(ModelViewSet):
    queryset = Encargado.objects.all()
    serializer_class = EncargadoSerializer


class VendedorViewSet(ModelViewSet):
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer
