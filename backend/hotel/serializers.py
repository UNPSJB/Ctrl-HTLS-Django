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


class HabitacionSerialializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ["id"]


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
    id = SerializerMethodField()
    nombre = SerializerMethodField()
    cantidad = SerializerMethodField()
    habitaciones = SerializerMethodField()

    def get_id(self, obj):
        return obj["tipo_habitacion"].id

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
        vendedores = HotelVendedor.objects.filter(hotel=obj)
        return HotelVendedorSerializer(vendedores, many=True).data

    # Todos los paquetes del Hotel
    # def get_paquetes(self, obj):
    #     paquetes = PaquetePromocional.objects.filter(hotel=obj)
    #     return PaqueteSerializer(paquetes, many=True).data

    # Todos los paquetes del Hotel que tengan minimo una Habitacion
    def get_paquetes(self, obj):
        paquetes = PaquetePromocional.objects.filter(hotel=obj)
        paquetes_con_habitaciones = [
            paquete for paquete in paquetes if paquete.habitacion_set.exists()
        ]
        return PaqueteSerializer(paquetes_con_habitaciones, many=True).data

    def get_habitaciones_por_tipo(self, obj):
        habitaciones = Habitacion.objects.filter(hotel=obj, paquete=None)
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
    habitaciones = SerializerMethodField()

    class Meta:
        model = PaquetePromocional
        fields = [
            "nombre",
            "fecha_inicio",
            "fecha_fin",
            "coeficiente_descuento",
            "habitaciones",
        ]

    def get_habitaciones(sefl, obj):
        habitaciones = Habitacion.objects.filter(paquete=obj)
        return [habitacion.id for habitacion in habitaciones]


class DescuentoSerializer(ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"


# -------------------- Metodos --------------------
