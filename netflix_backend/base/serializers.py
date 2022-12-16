from rest_framework import serializers
from .models import Actor,Movie

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('id', 'name', 'description', 'image_l','image_s',"movie","in_list")

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'description', 'image_l','image_s',"in_list","video_url")