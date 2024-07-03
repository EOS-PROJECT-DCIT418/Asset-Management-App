from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.utils.timezone import is_aware, make_naive
from apps.Items.models import Item



class BookingStatus(models.Model):
    status_name = models.CharField(max_length=50)

    def __str__(self):
        return self.status_name

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    item = models.ForeignKey('Items.Item', on_delete=models.CASCADE, related_name='bookings')
    booking_date = models.DateTimeField()
    status = models.ForeignKey('BookingStatus', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            pending_status, created = BookingStatus.objects.get_or_create(
                status_name='pending',
                defaults={'status_name': 'pending'}
            )
            self.status = pending_status

        if is_aware(self.booking_date):
            self.booking_date = make_naive(self.booking_date)

        super().save(*args, **kwargs)
            
    def __str__(self):
        return f'{self.user.username} - {self.item.name} - {self.booking_date}'