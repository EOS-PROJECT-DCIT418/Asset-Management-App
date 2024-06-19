from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ItemSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Item

#To create Item
class ItemListCreate(generics.ListCreateAPIView):
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Item.objects.filter(created_by=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(created_by=self.request.user)
        else:
            print(serializer.errors)

#To delete Item
class ItemDelete(generics.DestroyAPIView):
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Item.objects.filter(created_by=user)


class CreateUserView(generics.CreateAPIView):
    quertset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]