from django.contrib import admin
from .models import Movie,Actor

class MovieAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","in_list","video_url")
class ActorAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image_s', "image_l","movie","in_list")


admin.site.register(Movie, MovieAdmin)
admin.site.register(Actor, ActorAdmin)
