from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('id')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user is not None:
            # Assuming you want to return some user information or a token
            return Response({"message": "Login successful", "user": user.username}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
