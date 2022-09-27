from rest_framework import viewsets, filters
from rest_framework.response import Response

from movie.models import Movie
from movie.serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']
