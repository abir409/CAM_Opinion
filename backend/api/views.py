from django.shortcuts import render
from rest_framework import generics
from api.serializer import PostSerializer,CommentSerializer
from rest_framework.response import Response

from api.models import Post,Comment

# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all().order_by('-id')
    serializer_class=PostSerializer



all_post_view=PostList.as_view()


class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.kwargs.get('postid')
        return Comment.objects.filter(post_id=post_id).order_by('-id')

    def perform_create(self, serializer):
        post_id = self.kwargs.get('postid')
        post = Post.objects.get(id=post_id)
        serializer.save(post=post)

    # def list(self, request, *args, **kwargs):
    #     print("Comment list view called")  # Debug statement
    #     return super().list(request, *args, **kwargs)

comment_list_view = CommentList.as_view()