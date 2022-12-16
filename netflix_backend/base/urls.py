from django.urls import path
from . import views

urlpatterns = [
    path("main-movie",views.main_movie,name="main-movie"),
    path("actor/<str:key>",views.actor,name="actor"),
    path("movie/<str:key>",views.movie,name="movie"),
    path("random-movie",views.random_movie,name="random-movie"),
    path("random-actor",views.random_actor,name="random-actor"),
    path("movie-detail/<int:key>",views.movie_detail,name="movie-detail"),
    path("my-list",views.my_list,name="my-list"),
    path("my-actor-list",views.my_actor_list,name="my-actor-list"),
    path("my-list/add/<int:key>",views.my_list_add,name="my-list-add"),
    path("my-list/remove/<int:key>",views.my_list_remove,name="my-list-remove"),
    path("my-actor-list/add/<int:key>",views.my_actor_list_add,name="my-actor-list-add"),
    path("my-actor-list/remove/<int:key>",views.my_actor_list_remove,name="my-actor-list-remove"),
    path("movies",views.movies,name="movies"),
    path("actors",views.actors,name="actors"),
    path("popular-movies",views.popular_movies,name="popular-movies"),
    path("recommended-movies",views.recommended_movies,name="recommended-movies"),
    path("popular-movies-details",views.popular_movies_details,name="popular-movies-details"),
]