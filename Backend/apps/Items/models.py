from django.db import models

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
    collection = models.ForeignKey(Collection, related_name='items',on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    available = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.name