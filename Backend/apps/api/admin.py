from django.contrib import admin
from .models import Item, Collection, Location

# Register your models here.
admin.site.register(Item)
admin.site.register(Collection)
admin.site.register(Location)
