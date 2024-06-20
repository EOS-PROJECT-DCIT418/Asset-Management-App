from django.urls import path
from .views import LocationListCreate

urlpatterns = [
    path('', LocationListCreate.as_view(), name='location-list-create')
]