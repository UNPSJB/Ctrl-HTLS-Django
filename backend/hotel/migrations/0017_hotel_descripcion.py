# Generated by Django 4.2.5 on 2023-11-05 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0016_alter_habitacion_paquete_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='hotel',
            name='descripcion',
            field=models.TextField(blank=True),
        ),
    ]