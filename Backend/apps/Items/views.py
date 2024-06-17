from django.shortcuts import render

# apps/Items/views.py

from rest_framework import viewsets
from .models import Item, Collection, Location
from .serializers import ItemSerializer, CollectionSerializer, LocationSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
