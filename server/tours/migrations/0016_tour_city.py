# Generated by Django 5.0.3 on 2024-04-23 17:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0015_remove_tour_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='city',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.DO_NOTHING, to='tours.tourcity'),
        ),
    ]
