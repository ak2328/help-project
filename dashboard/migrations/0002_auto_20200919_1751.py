# Generated by Django 2.2 on 2020-09-19 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
#        migrations.AddField(
#            model_name='organizerdetails',
#            name='unique_code',
#            field=models.TextField(default='None'),
#        ),
        migrations.AddField(
            model_name='stalls',
            name='stall_contact_url',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='stalls',
            name='stall_schedule_url',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
