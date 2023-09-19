from django.db import models


# estos modelos estan creado pero no implementados


class Pais(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Provincia(models.Model):
    nombre = models.CharField(max_length=100)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Localidad(models.Model):
    nombre = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=20)
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Direccion(models.Model):
    nombre = models.CharField(max_length=100)
    numero = models.CharField(max_length=20)
    localidad = models.ForeignKey(Localidad, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.numero}, {self.localidad.nombre}, {self.localidad.codigo_postal}"
