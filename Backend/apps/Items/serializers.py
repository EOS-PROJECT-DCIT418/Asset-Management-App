from rest_framework import serializers
from .models import Item
from apps.Collections.models import Collection
from apps.Locations.models import Location
from apps.Collections.serializers import CollectionSerializer
from apps.Locations.serializers import LocationSerializer


class ItemSerializer(serializers.ModelSerializer):
    collection = CollectionSerializer(read_only=True)
    location = LocationSerializer(read_only=True)
    collection_id = serializers.PrimaryKeyRelatedField(
        queryset=Collection.objects.all(),
        source='collection',
        write_only=True
    )
    location_id = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(),
        source='location',
        write_only=True
    )

    class Meta:
        model = Item
        fields = ['id', 'name', 'serial_number', 'description', 'collection', 'location', 'collection_id', 'location_id']
        extra_kwargs = {
            'collection_id': {'write_only': True},
            'location_id': {'write_only': True}
        }
