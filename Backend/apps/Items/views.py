from django.shortcuts import render, redirect

# apps/Items/views.py
from rest_framework import status
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
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CollectionList(APIView):
    def get(self, request):
        collections = Collection.objects.all()
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LocationList(APIView):
    def get(self, request):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ItemCount(APIView):
    def get(self, request):
        count = Item.objects.count()
        return Response({'count': count}, status=status.HTTP_200_OK)