from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from apps.Items.models import Item


class BookingStatus(models.Model):
    status_name = models.CharField(max_length=50)

    def __str__(self):
        return self.status_name

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='bookings')
    booking_date = models.DateTimeField()
    status = models.ForeignKey(BookingStatus, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            pending_status = BookingStatus.objects.get(status_name='pending')
            self.status = pending_status
            super().save(*args, **kwargs)
            
    def __str__(self):
        return f'{self.user.username} - {self.item.name} - {self.booking_date}'