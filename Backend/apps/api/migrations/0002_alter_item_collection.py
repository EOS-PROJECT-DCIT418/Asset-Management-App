# Generated by Django 5.0.6 on 2024-06-18 21:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='collection',
            field=models.ForeignKey(default='Sony Camrecorder', on_delete=django.db.models.deletion.CASCADE, related_name='collection', to='api.collection'),
        ),
    ]
