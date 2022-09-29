from rest_framework import serializers
from movie.models import Movie


class MovieSerializer(serializers.ModelSerializer):
    poster = serializers.ImageField(required=False)
    
    class Meta:
        model = Movie
        fields = '__all__'
