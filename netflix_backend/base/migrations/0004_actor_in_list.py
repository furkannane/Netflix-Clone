# Generated by Django 4.0 on 2022-12-13 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_movie_video_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='actor',
            name='in_list',
            field=models.BooleanField(default=False),
        ),
    ]
