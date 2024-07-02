from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Booking, Item

@receiver(post_save, sender=Booking)
def update_item_status(sender, instance, created, **kwargs):
    if created and instance.item.available:
        instance.item.available = False
        instance.item.save()
