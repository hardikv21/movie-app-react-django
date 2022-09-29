from rest_framework import viewsets, filters, status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import MultiPartParser, FormParser
import requests

from movie.models import Movie
from movie.serializers import MovieSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']
    parser_classes = (MultiPartParser, FormParser)

    # def list(self, request):
    #     header = {
    #         "Content-Type":"application/json",
    #         "X-Client-Id":None,
    #         "X-Client-Secret":None,
    #     }
    #     response = requests.get('http://www.omdbapi.com?apikey=f0e7f017&s=war&page=3', headers=header)
    #     response = response.json()
    #     for item in response["Search"]:
    #         print(item["Title"])
    #         Movie.objects.create(title=item["Title"], releaseYear=item["Year"], poster="N/A")
            
    #     movies = Movie.objects.all()
    #     serializer = MovieSerializer(movies, many=True)
    #     return Response(serializer.data)
