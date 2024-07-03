# views.py

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Booking, BookingStatus
from .serializers import BookingSerializer, BookingStatusSerializer, CreateBookingSerializer
from rest_framework.permissions import IsAuthenticated
import pandas as pd
from django.http import HttpResponse
import logging

logger = logging.getLogger(__name__)

class BookingView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        logger.debug(f"User: {request.user}, Authenticated: {request.user.is_authenticated}")
        if not request.user.is_authenticated:
            return Response({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

        bookings = Booking.objects.filter(user=request.user)
        logger.debug(f"Bookings found: {bookings.count()}")
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CreateBookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookingFilterView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        logger.debug(f"User: {request.user}, Authenticated: {request.user.is_authenticated}")
        if not request.user.is_authenticated:
            return Response({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

        user = request.user
        status_name = self.kwargs.get('status_name', 'all')

        if status_name == 'all':
            bookings = Booking.objects.filter(user=user)
        else:
            try:
                status = BookingStatus.objects.get(status_name=status_name)
                bookings = Booking.objects.filter(user=user, status=status)
            except BookingStatus.DoesNotExist:
                return Response({"error": "Invalid status name"}, status=status.HTTP_400_BAD_REQUEST)
        
        logger.debug(f"Bookings found for status '{status_name}': {bookings.count()}")
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

class ExportBookingsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        logger.debug(f"User: {request.user}, Authenticated: {request.user.is_authenticated}")
        if not request.user.is_authenticated:
            return Response({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

        bookings = Booking.objects.filter(user=request.user)
        logger.debug(f"Total bookings for export: {bookings.count()}")
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
        response['Content-Disposition'] = f'attachment; filename="{request.user.username}_bookings.xlsx"'
        df.to_excel(response, index=False)
        return response
