# Generated by Django 4.2.5 on 2023-11-11 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0024_alter_paquetepromocional_coeficiente_descuento'),
        ('venta', '0007_alter_alquiler_habitaciones_alter_alquiler_paquetes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alquiler',
            name='habitaciones',
            field=models.ManyToManyField(blank=True, related_name='alquileres', to='hotel.habitacion'),
        ),
    ]