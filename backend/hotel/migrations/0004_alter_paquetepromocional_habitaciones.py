# Generated by Django 4.2.5 on 2023-11-19 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0003_remove_habitacion_paquete_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paquetepromocional',
            name='habitaciones',
            field=models.ManyToManyField(blank=True, related_name='paquetes', to='hotel.habitacion'),
        ),
    ]
