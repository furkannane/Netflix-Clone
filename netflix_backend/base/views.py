from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
import random
from django.db.models import Q

MAIN_MOVIE = "Interstellar"

class ActorView(viewsets.ModelViewSet):
    serializer_class = ActorSerializer
    queryset = Actor.objects.all()

class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

# ok
def main_movie(r):
    movie = Movie.objects.get(name=MAIN_MOVIE)
    serializer = MovieSerializer(movie)
    return JsonResponse(serializer.data)

# search
# ok
def actor(r,key):
    actor = Actor.objects.get(name=key)
    serializer = ActorSerializer(actor)
    return JsonResponse(serializer.data)

# search
# ok
def movie(r,key):
    movies = Movie.objects.filter(Q(name__icontains = key))
    serializer = MovieSerializer(movies,many=True)
    return JsonResponse(serializer.data,safe=False)

# recommendation
# ok
def random_movie(r):
    movie = random.choice(Movie.objects.filter(~Q(name=MAIN_MOVIE)))
    serializer = MovieSerializer(movie)
    return JsonResponse(serializer.data)

# recommendation
# ok
def random_actor(r):
    actor = random.choice(Actor.objects.all())
    serializer = ActorSerializer(actor)
    return JsonResponse(serializer.data)

# movie detail
# ok
def movie_detail(r,key):
    movie = Movie.objects.get(id=key)
    actors = movie.actor_set.all()
    serializer = MovieSerializer(movie)
    serializer_actor = ActorSerializer(actors,many=True)
    return JsonResponse({"movie":serializer.data,"actors":serializer_actor.data})

# my list
def my_list(r):
    movies = Movie.objects.filter(in_list=True)
    serializer = MovieSerializer(movies,many=True)
    return JsonResponse(serializer.data,safe=False)

def my_actor_list(r):
    actors = Actor.objects.filter(in_list=True)
    serializer = ActorSerializer(actors,many=True)
    return JsonResponse(serializer.data,safe=False)

def my_list_add(r,key):
    movie = Movie.objects.get(id=key)
    movie.in_list = True
    movie.save()
    return JsonResponse({"code":"ok"})

def my_list_remove(r,key):
    movie = Movie.objects.get(id=key)
    movie.in_list = False
    movie.save()
    return JsonResponse({"code":"ok"})

def my_actor_list_add(r,key):
    actor = Actor.objects.get(id=key)
    actor.in_list = True
    actor.save()
    return JsonResponse({"code":"ok"})

def my_actor_list_remove(r,key):
    actor = Actor.objects.get(id=key)
    actor.in_list = False
    actor.save()
    return JsonResponse({"code":"ok"})

def movies(r):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies,many=True)
    return JsonResponse(serializer.data,safe=False)

def actors(r):
    actors = Actor.objects.all()
    serializer = ActorSerializer(actors,many=True)
    return JsonResponse(serializer.data,safe=False)

def popular_movies(r):
    movies = Movie.objects.filter(id__lte = 6)
    serializer = MovieSerializer(movies,many=True)
    return JsonResponse(serializer.data,safe=False)

def recommended_movies(r):
    movies = Movie.objects.filter(id__gte = 7)
    serializer = MovieSerializer(movies,many=True)
    return JsonResponse(serializer.data,safe=False)

def popular_movies_details(r):
    movies = Movie.objects.filter(id__lte = 6)
    result = []
    for movie in movies:
        actors = movie.actor_set.all()
        serializer = MovieSerializer(movie)
        serializer_actor = ActorSerializer(actors,many=True)
        result.append({"movie":serializer.data,"actors":serializer_actor.data})
    return JsonResponse(result,safe=False)