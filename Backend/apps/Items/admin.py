from django.contrib import admin
from .models import Item,Location,Collection

# Register your models here.
admin.site.register(Item)
admin.site.register(Collection)
admin.site.register(Location)
