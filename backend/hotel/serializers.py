from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    Serializer,
)
from .models import (
    Hotel,
    Habitacion,
    HotelVendedor,
    PrecioPorTipo,
    PaquetePromocional,
    Descuento,
    Temporada,
)
from core.serializers import (
    CategoriaMidSerializer,
    CategoriaMidSerializer,
    EncargadoSerializer,
    VendedorSerializer,
    TipoHabitacionSerializer,
)


class HabitacionSerialializer(ModelSerializer):
    class Meta:
        model = Habitacion
        fields = "__all__"


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
    tipo_habitacion = TipoHabitacionSerializer(read_only=True)
    habitaciones = SerializerMethodField()

    def get_habitaciones(self, obj):
        return [habitacion.id for habitacion in obj["habitaciones"]]


class HotelSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = ["id", "nombre", "direccion", "categoria", "encargado"]


class HotelMidSerializer(ModelSerializer):
    encargado = EncargadoSerializer()
    categoria = CategoriaMidSerializer()
    ubicacion = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            "id",
            "nombre",
            "encargado",
            "categoria",
            "descripcion",
            "habilitado",
            "ubicacion",
        ]

    def get_ubicacion(self, obj):
        return ubicacion(obj)


class HotelFullSerializer(ModelSerializer):
    ubicacion = SerializerMethodField()
    categoria = CategoriaMidSerializer()
    encargado = EncargadoSerializer()
    vendedores = SerializerMethodField()
    habitaciones_por_tipo = SerializerMethodField()
    paquetes = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            "nombre",
            "descripcion",
            "habilitado",
            "ubicacion",
            "categoria",
            "encargado",
            "vendedores",
            "paquetes",
            "habitaciones_por_tipo",
        ]

    def get_vendedores(self, obj):
        return vendedores(obj)

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

    def get_ubicacion(self, obj):
        return ubicacion(obj)


class PaqueteSerializer(ModelSerializer):
    habitaciones = SerializerMethodField()
    precio = SerializerMethodField()

    class Meta:
        model = PaquetePromocional
        fields = [
            "nombre",
            "fecha_inicio",
            "fecha_fin",
            "precio",
            "coeficiente_descuento",
            "habitaciones",
        ]

    def get_habitaciones(self, obj):
        return habitaciones(obj)

    def get_precio(self, obj):
        return precio(obj)


class DescuentoSerializer(ModelSerializer):
    class Meta:
        model = Descuento
        fields = "__all__"


class TemporadaSerializer(ModelSerializer):
    class Meta:
        model = Temporada
        fields = "__all__"


# -------------------- Metodos --------------------


def habitaciones(obj):
    habitaciones = Habitacion.objects.filter(paquete=obj)
    return [habitacion.id for habitacion in habitaciones]


def precio(obj):
    noches = (obj.fecha_fin - obj.fecha_inicio).days
    habitacion = Habitacion.objects.filter(paquete=obj).first()
    if habitacion is not None:
        tipo_habitacion = habitacion.tipo_habitacion
        precio_tipo_habitacion = PrecioPorTipo.objects.get(
            hotel=obj.hotel, tipohabitacion=tipo_habitacion
        ).precio
        cantidad_habitaciones = obj.hotel.habitacion_set.filter(paquete=obj).count()

        precio = noches * precio_tipo_habitacion * cantidad_habitaciones
        return precio
    else:
        return None


def vendedores(obj):
    vendedores = HotelVendedor.objects.filter(hotel=obj)
    return HotelVendedorSerializer(vendedores, many=True).data


def ubicacion(obj):
    direccion = obj.direccion
    ciudad = direccion.ciudad
    provincia = ciudad.provincia
    pais = provincia.pais
    return {
        "pais": pais.nombre,
        "provincia": provincia.nombre,
        "ciudad": ciudad.nombre,
        "calle": direccion.calle,
        "numero": direccion.numero,
    }
