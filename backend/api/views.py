from django.shortcuts import render
from rest_framework import generics
from api.serializer import PostSerializer

from api.models import Post

# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all().order_by('-id')
    serializer_class=PostSerializer

    # def perform_create(self, serializer):
    #     print("Saving post with serializer data:", serializer.validated_data)  # Debug statement
    #     serializer.save()

all_post_view=PostList.as_view()