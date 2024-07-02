# apps/Items/serializers.py

from rest_framework import serializers
from .models import Item
from apps.Collections.models import Collection
from apps.Locations.models import Location
from apps.Collections.serializers import CollectionSerializer
from apps.Locations.serializers import LocationSerializer


class ItemSerializer(serializers.ModelSerializer):
    collection = CollectionSerializer()
    location = LocationSerializer()

    class Meta:
        model = Item
        fields = ['id', 'name', 'serial_number', 'description', 'collection', 'location']
