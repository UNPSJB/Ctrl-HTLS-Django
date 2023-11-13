# Generated by Django 4.2.5 on 2023-11-10 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0020_alter_temporada_tipo'),
        ('venta', '0006_alter_alquiler_habitaciones_alter_alquiler_paquetes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alquiler',
            name='habitaciones',
            field=models.ManyToManyField(blank=True, to='hotel.habitacion'),
        ),
        migrations.AlterField(
            model_name='alquiler',
            name='paquetes',
            field=models.ManyToManyField(blank=True, to='hotel.paquetepromocional'),
        ),
    ]