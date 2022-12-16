from django.db import models

# Create your models here.

class Movie(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    image_s = models.TextField()
    image_l = models.TextField()
    in_list = models.BooleanField(default=False)
    video_url = models.TextField(default="")

    def _str_(self):
        return self.name

class Actor(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    image_s = models.TextField()
    image_l = models.TextField()
    in_list = models.BooleanField(default=False)
    movie = models.ForeignKey(Movie,on_delete=models.DO_NOTHING)

    def _str_(self):
        return self.name


