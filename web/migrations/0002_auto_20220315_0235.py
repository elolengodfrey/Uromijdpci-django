# Generated by Django 3.2.8 on 2022-03-15 02:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='newsfeed',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.DeleteModel(
            name='Newsfeed',
        ),
    ]