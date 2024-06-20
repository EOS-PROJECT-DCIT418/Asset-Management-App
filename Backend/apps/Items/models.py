from django.db import models
from apps.Collections.models import Collection
from apps.Locations.models import Location

# Create your models here.
# class Collection(models.Model):
#     name = models.CharField(max_length=255)
#     #To change the representations of the model on the admin dashboard
#     class Meta:
#         ordering = ('name',) #orders all created collections

#     def __str__(self) -> str:
#         return self.name #returns actual Collection name
    
# class Location(models.Model):
#     location = models.CharField(max_length=255)
#     #To change the representations of the model on the admin dashboard
#     class Meta:
#         ordering = ('location',) #orders all created collections

#     def __str__(self) -> str:
#         return self.name #returns actual Collection name
    
class Item(models.Model):
    name = models.CharField(max_length=255)
    serial_number = models.CharField(max_length=50, default='0000000000')
    description = models.TextField(blank=True, null=True)
    collection = models.ForeignKey(Collection, related_name='items',on_delete=models.CASCADE, default=1)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, default=10)
    
    def __str__(self) -> str:
        return self.name