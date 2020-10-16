# Generated by Django 3.1.1 on 2020-10-16 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_refreshtoken'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(error_messages={'unique': 'This email has already been registered.'}, max_length=254, unique=True, verbose_name='email address'),
        ),
    ]
