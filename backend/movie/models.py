from django.db import models


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Movie(models.Model):
    title = models.CharField(max_length=100)
    releaseYear = models.CharField(max_length=100)
    poster = models.ImageField(upload_to=upload_to, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
