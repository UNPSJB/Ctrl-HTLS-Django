# Generated by Django 4.2.5 on 2023-11-05 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0017_hotel_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='hotel',
            name='habilitado',
            field=models.BooleanField(default=False),
        ),
    ]
