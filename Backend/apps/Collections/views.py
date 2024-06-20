from rest_framework import generics
from .models import Collection
from .serializers import CollectionSerializer

class CollectionListCreate(generics.ListCreateAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
