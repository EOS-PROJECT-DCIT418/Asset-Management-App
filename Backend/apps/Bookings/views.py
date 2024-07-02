# from django.shortcuts import render, get_object_or_404, redirect
# from django.http import HttpResponse
# from .models import Booking, Item
# from .forms import BookingForm
# from django.contrib.auth.decorators import login_required

# @login_required
# def booking_list(request):
#     bookings = Booking.objects.filter(user=request.user)
#     return render(request, 'bookings/booking_list.html', {'bookings': bookings})

# @login_required
# def booking_create(request):
#     if request.method == 'POST':
#         form = BookingForm(request.POST)
#         if form.is_valid():
#             booking = form.save(commit=False)
#             booking.user = request.user
#             booking.save()
#             return redirect('booking_list')
#     else:
#         form = BookingForm()
#     return render(request, 'bookings/booking_form.html', {'form': form})

# @login_required
# def booking_detail(request, pk):
#     booking = get_object_or_404(Booking, pk=pk)
#     return render(request, 'bookings/booking_detail.html', {'booking': booking})

# @login_required
# def booking_cancel(request, pk):
#     booking = get_object_or_404(Booking, pk=pk)
#     booking.status = 'cancelled'
#     booking.save()
#     return redirect('booking_list')


# apps/Bookings/views.py

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Booking, BookingStatus
from .serializers import BookingSerializer, BookingStatusSerializer, CreateBookingSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
import pandas as pd
from django.http import HttpResponse

class BookingListCreate(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    permission_classes = [IsAuthenticated]
    # serializer_class = BookingSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateBookingSerializer
        return BookingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BookingFilterView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        status_name = self.kwargs['status_name']
        if status_name == 'all':
            return Booking.objects.all()
        else:
            status = BookingStatus.objects.get(status_name=status_name)
            return Booking.objects.filter(status=status)

class ExportBookingsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        bookings = Booking.objects.all()
        data = [
            {
                "User": booking.user.username,
                "Item": booking.item.name,
                "Booking Date": booking.booking_date,
                "Status": booking.status.status_name,
            }
            for booking in bookings
        ]
        df = pd.DataFrame(data)
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="bookings.xlsx"'
        df.to_excel(response, index=False)
        return response
