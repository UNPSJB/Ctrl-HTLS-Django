# Generated by Django 4.2.5 on 2023-11-19 16:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotel',
            name='estado',
        ),
    ]
