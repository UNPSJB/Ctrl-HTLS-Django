from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    Serializer,
)
from .models import Hotel, Habitacion, HotelVendedor, PaquetePromocional, Descuento
from core.models import Categoria, Vendedor, Encargado, Direccion, TipoHabitacion
from collections import Counter

# -------------------- Serializadores de 'core' --------------------


class DireccionSerializer(ModelSerializer):
    class Meta:
        model = Direccion
        fields = ["calle", "numero"]


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["nombre"]


class EncargadoSerializer(ModelSerializer):
    class Meta:
        model = Encargado
        fields = ["documento", "nombre", "apellido"]


class VendedorSerializer(ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ["documento", "nombre", "apellido"]


class TipoHabitacionSerializer(ModelSerializer):
    class Meta:
        model = TipoHabitacion
        fields = ["nombre"]


# -------------------- Serializadores de 'hotel' --------------------


class HotelVendedorSerializer(ModelSerializer):
    vendedor = VendedorSerializer()

    class Meta:
        model = HotelVendedor
        fields = ["vendedor"]


class HabitacionSerializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["numero_de_habitacion", "piso", "hotel", "tipo_habitacion"]


class HabitacionPorTipoSerializer(Serializer):
    nombre = SerializerMethodField()
    cantidad = SerializerMethodField()
    habitaciones = SerializerMethodField()

    def get_nombre(self, obj):
        return obj["tipo_habitacion"].nombre

    def get_cantidad(self, obj):
        return len(obj["habitaciones"])

    def get_habitaciones(self, obj):
        return [habitacion.id for habitacion in obj["habitaciones"]]


class HotelSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelFullSerializer(ModelSerializer):
    direccion = DireccionSerializer()
    categoria = CategoriaSerializer()
    encargado = EncargadoSerializer()
    vendedores = SerializerMethodField()
    habitaciones_por_tipo = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            "id",
            "nombre",
            "direccion",
            "categoria",
            "encargado",
            "vendedores",
            "habitaciones_por_tipo",
        ]

    def get_vendedores(self, obj):
        vendedores = HotelVendedor.objects.filter(hotel=obj)
        return HotelVendedorSerializer(vendedores, many=True).data

    def get_habitaciones_por_tipo(self, obj):
        habitaciones = Habitacion.objects.filter(hotel=obj)
        tipos_de_habitacion = set(
            habitacion.tipo_habitacion for habitacion in habitaciones
        )
        return HabitacionPorTipoSerializer(
            [
                {
                    "tipo_habitacion": tipo,
                    "habitaciones": [
                        habitacion
                        for habitacion in habitaciones
                        if habitacion.tipo_habitacion == tipo
                    ],
                }
                for tipo in tipos_de_habitacion
            ],
            many=True,
        ).data


class PaqueteSerializer(ModelSerializer):
    class Meta:
        model = PaquetePromocional
        fields = "__all__"


class DescuentoSerializer(ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"
