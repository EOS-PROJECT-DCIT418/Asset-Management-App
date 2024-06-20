from django.urls import path
from .views import CollectionListCreate

urlpatterns = [
    path('', CollectionListCreate.as_view(), name='collection-list-create')
]