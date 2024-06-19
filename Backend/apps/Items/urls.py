# apps/Items/urls.py

from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.ItemView.as_view(), name ='items-list'),
    path('collections/', views.CollectionList.as_view(), name='collection-list'),
    path('locations/', views.LocationList.as_view(), name='location-list'),
    path('count/', views.ItemCount.as_view(), name='item-count'),
]
