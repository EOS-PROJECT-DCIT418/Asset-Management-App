from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    #To change the representations of the model on the admin dashboard
    class Meta:
        ordering = ('name',) #orders all created locations

    def __str__(self) -> str:
        return f"{self.name} ({self.city})"
