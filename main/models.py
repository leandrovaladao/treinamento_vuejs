from django.contrib.auth.models import User
from django.db import models


class BaseDataModel(models.Model):

    class Meta:
        abstract = True

    creation_date = models.DateTimeField(auto_now=True)
    last_update = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)


class Posts(BaseDataModel):
    content = models.TextField()
    image = models.URLField()


class Albums(BaseDataModel):
    album_name = models.CharField(max_length=255)
    album_cover = models.URLField()
    artists_name = models.CharField(max_length=255)


class ToDos(BaseDataModel):
    title = models.CharField(max_length=100)
    content = models.TextField()