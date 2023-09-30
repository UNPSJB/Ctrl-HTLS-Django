from django.test import TestCase
from .models import Pais, Provincia, Ciudad, Direccion


PAIS = "AR"
PROVINCIA = "Chubut"
CIUDAD = "Trelew"
CALLE = "Belgrano"


class UbicacionModelTest(TestCase):
    fixtures = ["ubicacion/fixtures/data.json"]

    def test_pais_content(self):
        try:
            pais = Pais.objects.get(codigo=PAIS)
            expected_object_name = f"{pais.codigo}, {pais.nombre}"
            self.assertEquals(expected_object_name, str(pais))
        except Pais.DoesNotExist:
            self.fail(
                f"El país con el código '{PAIS}' no existe en los datos de prueba."
            )

    def test_provincia_content(self):
        try:
            provincia = Provincia.objects.get(nombre=PROVINCIA)
            expected_object_name = f"{provincia.nombre}, {provincia.pais}"
            self.assertEquals(expected_object_name, str(provincia))
        except Provincia.DoesNotExist:
            self.fail(
                f"La provincia con el nombre '{PROVINCIA}' no existe en los datos de prueba."
            )

    def test_ciudad_content(self):
        try:
            ciudad = Ciudad.objects.get(nombre=CIUDAD)
            expected_object_name = f"{ciudad.nombre}, {ciudad.provincia}"
            self.assertEquals(expected_object_name, str(ciudad))
        except Ciudad.DoesNotExist:
            self.fail(
                f"La ciudad con el nombre '{CIUDAD}' no existe en los datos de prueba."
            )

    def test_direccion_content(self):
        try:
            direccion = Direccion.objects.get(calle=CALLE)
            expected_object_name = (
                f"{direccion.calle} {direccion.numero}, {direccion.ciudad}"
            )
            self.assertEquals(expected_object_name, str(direccion))
        except Direccion.DoesNotExist:
            self.fail(
                f"La dirección con la calle '{CALLE}' no existe en los datos de prueba."
            )
