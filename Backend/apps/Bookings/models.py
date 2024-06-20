from django.db import models
from django.conf import settings
from apps.Items.models import Item


class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='bookings')
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    status = models.CharField(max_length=50, choices=(
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
        ('completed', 'Completed')
    ), default='pending')

    def __str__(self):
        return f'{self.user.username} - {self.item.name} - {self.status}'

    @property
    def is_active(self):
        """ Return True if the booking is currently active. """
        return self.status in ['confirmed'] and self.start_date <= timezone.now() <= self.end_date

class Feedback(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE, related_name='feedback')
    comment = models.TextField(blank=True)
    rating = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f'Feedback for {self.booking}'
