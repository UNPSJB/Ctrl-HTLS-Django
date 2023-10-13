from django.db import models


class Pais(models.Model):
    codigo = models.CharField(max_length=2, primary_key=True)
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.codigo}, {self.nombre}"

    def obtener_provincias(self):
        # Este método devuelve todas las provincias asociadas a este país
        return Provincia.objects.filter(pais=self)


class Provincia(models.Model):
    nombre = models.CharField(max_length=100)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre}, {self.pais}"

    def obtener_ciudades(self):
        # Este método devuelve todas las ciudades asociadas a esta provincia
        return Ciudad.objects.filter(provincia=self)


class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=20, primary_key=True)
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre}, {self.provincia}"


class Direccion(models.Model):
    calle = models.CharField(max_length=100)
    numero = models.IntegerField()
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.calle} {self.numero}"
