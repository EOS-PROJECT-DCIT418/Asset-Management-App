from django.db import models
from apps.Collections.models import Collection
from apps.Locations.models import Location

    
class Item(models.Model):
    name = models.CharField(max_length=255)
    serial_number = models.CharField(max_length=50, default='0000000000')
    description = models.TextField(blank=True, null=True)
    collection = models.ForeignKey(Collection, related_name='items',on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    available = models.BooleanField(default=True)
    
    def __str__(self) -> str:
        return self.name