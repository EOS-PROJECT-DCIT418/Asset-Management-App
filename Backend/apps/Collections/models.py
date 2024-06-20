from django.db import models

class Collection(models.Model):
    name = models.CharField(max_length=255)
    #To change the representations of the model on the admin dashboard
    class Meta:
        ordering = ('name',) #orders all created collections

    def __str__(self) -> str:
        return self.name #returns actual Collection name