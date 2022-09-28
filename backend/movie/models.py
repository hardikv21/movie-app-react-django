from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=100)
    releaseYear = models.CharField(max_length=100)
    poster = models.ImageField(upload_to='images/')
    created = models.DateTimeField(auto_now_add=True)
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
