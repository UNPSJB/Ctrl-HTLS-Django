# Generated by Django 4.2.5 on 2023-11-21 22:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('hotel', '0001_initial'),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Alquiler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_inicio', models.DateField()),
                ('fecha_fin', models.DateField()),
                ('pasajeros', models.IntegerField()),
                ('importe', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('cliente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.cliente')),
                ('habitaciones', models.ManyToManyField(blank=True, related_name='alquileres', to='hotel.habitacion')),
                ('paquetes', models.ManyToManyField(blank=True, related_name='alquileres', to='hotel.paquetepromocional')),
            ],
        ),
        migrations.CreateModel(
            name='DetalleFactura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descripcion', models.CharField(max_length=80)),
                ('importe', models.DecimalField(decimal_places=2, max_digits=10)),
                ('alquiler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='venta.alquiler')),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('numero', models.IntegerField()),
                ('tipo_factura', models.CharField(max_length=1)),
                ('importe_total', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('importe', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha', models.DateField()),
                ('tipo_pago', models.PositiveSmallIntegerField(choices=[(0, 'CONTADO'), (1, 'PUNTOS'), (2, 'TARJETA')])),
            ],
        ),
        migrations.CreateModel(
            name='Liquidacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.IntegerField()),
                ('fecha_emision', models.DateField()),
                ('fecha_pago', models.DateField(null=True)),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('detalle_factura', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='venta.detallefactura')),
            ],
        ),
        migrations.AddField(
            model_name='detallefactura',
            name='factura',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='venta.factura'),
        ),
    ]
