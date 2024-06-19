from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Collection(models.Model):
    name = models.CharField(max_length=255)
    #To change the representations of the model on the admin dashboard
    class Meta:
        ordering = ('name',) #orders all created collections

    def __str__(self) -> str:
        return self.name #returns actual Collection name
    
class Location(models.Model):
    location = models.CharField(max_length=255)
    #To change the representations of the model on the admin dashboard
    class Meta:
        ordering = ('location',) #orders all created collections

    def __str__(self) -> str:
        return self.name #returns actual Collection name
    
class Item(models.Model):
    collection = models.ForeignKey(Collection, related_name='collection',on_delete=models.CASCADE)
    # location = models.ForeignKey(Location, related_name="Itemlocation",on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    available = models.BooleanField(default=False)
    created_by = models.ForeignKey(User, related_name='api_items', on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.name