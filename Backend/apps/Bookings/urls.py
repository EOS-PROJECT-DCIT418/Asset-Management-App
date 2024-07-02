# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.booking_list, name='booking_list'),
#     path('create/', views.booking_create, name='booking_create'),
#     path('<int:pk>/', views.booking_detail, name='booking_detail'),
#     path('<int:pk>/cancel/', views.booking_cancel, name='booking_cancel'),
# ]

# apps/Bookings/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookingListCreate.as_view(), name='booking-list-create'),
    path('bookings/filter/<str:status_name>/', views.BookingFilterView.as_view(), name='booking-filter'),
    path('bookings/export/', views.ExportBookingsView.as_view(), name='export-bookings'),
]
