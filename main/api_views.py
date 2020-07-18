from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_409_CONFLICT
from rest_framework.views import APIView
from django.contrib.auth.models import User
from main import models
from main import serializers
from treinamento_vuejs.permissions import IsLoggedInUserOrAdmin, IsAdminUser


class PersmissionsMixin(APIView):

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create' or self.action == 'list':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class PostsViewset(viewsets.ModelViewSet, PersmissionsMixin):
    queryset = models.Posts.objects.all()
    serializer_class = serializers.PostsSerializer


class AlbumsViewset(viewsets.ModelViewSet, PersmissionsMixin):
    queryset = models.Albums.objects.all()
    serializer_class = serializers.AlbumsSerializer


class ToDosViewset(viewsets.ModelViewSet, PersmissionsMixin):
    queryset = models.ToDos.objects.all()
    serializer_class = serializers.ToDosSerializer


class UserViewset(viewsets.ModelViewSet, PersmissionsMixin):

    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class CheckData(viewsets.ViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        queryset = models.Posts.objects.count()
        if queryset > 0:
            return Response(status=HTTP_409_CONFLICT)
        else:
            return Response(status=HTTP_204_NO_CONTENT)