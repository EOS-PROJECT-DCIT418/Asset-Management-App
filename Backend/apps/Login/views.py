from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.middleware.csrf import get_token

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('id')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)

            # Set token in HTTPOnly cookie
            response =  Response({
                "message": "Login successful",
                "user": user.username,
                "token": token.key,
                }, status=status.HTTP_200_OK)
            
            response.set_cookie(
                'auth_token',
                token.key,
                httponly=True,
                secure=False,
                max_age=86400,
            )

            csrf_token = get_token(request)
            response.set_cookie(
                'csrftoken',
                csrf_token,
                httponly=False,
                secure=False,
                max_age=86400,
            )

            return response
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
