from django.contrib.auth.models import User
from django.db import models


class BaseDataModel(models.Model):

    class Meta:
        abstract = True

    creation_date = models.DateTimeField(auto_now=True)
    last_update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Posts(BaseDataModel):
    title = models.CharField(max_length=100)
    body = models.TextField()


class Albums(BaseDataModel):
    title = models.CharField(max_length=255)


class ToDos(BaseDataModel):
    title = models.CharField(max_length=100)
    completed = models.BooleanField()
