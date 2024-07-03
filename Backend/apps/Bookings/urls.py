from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookingView.as_view(), name='booking-list-create'),
    path('status/<str:status_name>/', views.BookingFilterView.as_view(), name='booking-filter'),
    path('export/', views.ExportBookingsView.as_view(), name='export-bookings'),
]
