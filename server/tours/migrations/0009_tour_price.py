# Generated by Django 5.0.3 on 2024-04-23 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0008_tour_preview_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
