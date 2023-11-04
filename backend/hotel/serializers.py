from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    Serializer,
)
from .models import Hotel, Habitacion, HotelVendedor, PaquetePromocional, Descuento
from core.serializers import (
    DireccionSerializer,
    CategoriaSerializer,
    EncargadoSerializer,
    VendedorSerializer,
)
from django.db.models import Count


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
    paquetes = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            "nombre",
            "direccion",
            "categoria",
            "encargado",
            "vendedores",
            "paquetes",
            "habitaciones_por_tipo",
        ]

    def get_vendedores(self, obj):
        return get_vendedores(obj)

    def get_paquetes(self, obj):
        return get_paquetes(obj)

    def get_habitaciones_por_tipo(self, obj):
        return get_habitaciones_por_tipo(obj)


class PaqueteSerializer(ModelSerializer):
    class Meta:
        model = PaquetePromocional
        fields = ["nombre", "fecha_inicio", "fecha_fin", "coeficiente_descuento"]


class DescuentoSerializer(ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"


# -------------------- Metodos --------------------


def get_vendedores(hotel):
    vendedores = HotelVendedor.objects.filter(hotel=hotel)
    return HotelVendedorSerializer(vendedores, many=True).data


def get_paquetes(hotel):
    paquetes = PaquetePromocional.objects.filter(hotel=hotel)
    return PaqueteSerializer(paquetes, many=True).data


def get_habitaciones_por_tipo(hotel):
    habitaciones = Habitacion.objects.filter(hotel=hotel)
    tipos_de_habitacion = set(habitacion.tipo_habitacion for habitacion in habitaciones)
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
