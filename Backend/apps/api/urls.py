from django.urls import path
from .views import ItemListCreate, ItemDelete


urlpatterns = [
    path("items/",ItemListCreate.as_view(),name="item-list"),
    path("items/delete/<int:pk>/",ItemDelete.as_view(),name="delete-item"),
]
