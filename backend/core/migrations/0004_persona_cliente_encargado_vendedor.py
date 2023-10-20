# Generated by Django 4.2.5 on 2023-10-20 19:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_servicio_tipohabitacion_precio_categoria'),
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('tipo_documento', models.PositiveSmallIntegerField(choices=[(0, 'DNI'), (1, 'PASAPORTE'), (2, 'LIBRETA')])),
                ('documento', models.CharField(max_length=13, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=200)),
                ('apellido', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.persona')),
            ],
            bases=('core.persona',),
        ),
        migrations.CreateModel(
            name='Encargado',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.persona')),
            ],
            bases=('core.persona',),
        ),
        migrations.CreateModel(
            name='Vendedor',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.persona')),
            ],
            bases=('core.persona',),
        ),
    ]