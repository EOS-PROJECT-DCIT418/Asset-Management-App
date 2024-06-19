from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Item, Location, Collection

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
        extra_kwargs = {"password":{"write_only":True}}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        
class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'serial_number', 'description', 'collection', 'location']
        extra_kwargs = {"created_by":{"read_only":True}}