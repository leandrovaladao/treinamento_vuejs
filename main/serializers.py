from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import serializers

from main import models


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Posts
        fields = '__all__'


class AlbumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Albums
        fields = '__all__'


class ToDosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ToDos
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)
