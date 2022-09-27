from rest_framework import routers
from movie.views import MovieViewSet


router = routers.SimpleRouter()
router.register(r'movie', MovieViewSet)
