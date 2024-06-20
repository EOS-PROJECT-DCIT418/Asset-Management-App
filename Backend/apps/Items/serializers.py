# apps/Items/serializers.py

from rest_framework import serializers
from .models import Item
from apps.Collections.serializers import CollectionSerializer
from apps.Locations.serializers import LocationSerializer

# class CollectionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Collection
#         fields = '__all__'

# class LocationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Location
#         fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    collection = CollectionSerializer()
    location = LocationSerializer()

    class Meta:
        model = Item
        fields = ['id', 'name', 'serial_number', 'description', 'collection', 'location']
