# Generated by Django 3.1.1 on 2020-11-26 00:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0002_auto_20201024_1211'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='accessory',
            options={'verbose_name_plural': 'accessories'},
        ),
        migrations.RemoveField(
            model_name='accessory',
            name='rating',
        ),
    ]