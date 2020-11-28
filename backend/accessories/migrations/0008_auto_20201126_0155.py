# Generated by Django 3.1.1 on 2020-11-26 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0007_auto_20201126_0149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accessory',
            name='serial_number',
            field=models.CharField(blank=True, error_messages={'unique': 'An accessory already exists with that serial number'}, max_length=50, null=True),
        ),
    ]