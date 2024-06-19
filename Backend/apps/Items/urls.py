# apps/Items/urls.py

from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.ItemView.as_view(), name ='items-list'),
]
