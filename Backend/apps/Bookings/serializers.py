from rest_framework import serializers
from .models import Booking, BookingStatus
from apps.Items.serializers import ItemSerializer
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class BookingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingStatus
        fields = ['id', 'status_name']

class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    item = ItemSerializer()
    status = BookingStatusSerializer()

    class Meta:
        model = Booking
        fields = ['id', 'user', 'item', 'booking_date', 'status']

class CreateBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['item', 'booking_date']  # 'user' and 'status' are set automatically

    def validate_item(self, value):
        if not value.available:
            raise serializers.ValidationError('Item is not available')
        return value
    
    def create(self, validated_data):
        booking = Booking.objects.create(**validated_data)
        booking.item.available = False
        booking.item.save()
        return booking
