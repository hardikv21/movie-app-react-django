from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
import requests

from movie.models import Movie
from movie.serializers import MovieSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    # page_size_query_param = 'page_size'
    # max_page_size = 1000


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']

    # def list(self, request):
    #     header = {
    #         "Content-Type":"application/json",
    #         "X-Client-Id":None,
    #         "X-Client-Secret":None,
    #     }
    #     response = requests.get('http://www.omdbapi.com?apikey=f0e7f017&s=koi&page=1', headers=header)
    #     response = response.json()
    #     for item in response["Search"]:
    #         print(item["Title"])
    #         Movie.objects.create(title=item["Title"], releaseYear=item["Year"], poster=item["Poster"])
            
    #     movies = Movie.objects.all()
    #     serializer = MovieSerializer(movies, many=True)
    #     return Response(serializer.data)
