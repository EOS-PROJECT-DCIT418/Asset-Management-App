from django.shortcuts import render, redirect

# apps/Items/views.py

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Item, Collection, Location
from .serializers import ItemSerializer, CollectionSerializer, LocationSerializer

class ItemView(APIView):
    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# class CollectionViewSet(viewsets.ModelViewSet):
#     queryset = Collection.objects.all()
#     serializer_class = CollectionSerializer

# class LocationViewSet(viewsets.ModelViewSet):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer
