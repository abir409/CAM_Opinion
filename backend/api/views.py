from django.shortcuts import render
from rest_framework import generics
from api.serializer import PostSerializer,CommentSerializer

from api.models import Post,Comment

# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all().order_by('-id')
    serializer_class=PostSerializer



all_post_view=PostList.as_view()

class CommentList(generics.ListCreateAPIView):
    # queryset = Comment.objects.all().order_by('-id')
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.kwargs.get('postid')
        print("Getting comments for post", post_id)  # Debug statement
        return Comment.objects.filter(post_id=post_id).order_by('-id')

    # def list(self, request, *args, **kwargs):
    #     print("Comment list view called")  # Debug statement
    #     return super().list(request, *args, **kwargs)

comment_list_view = CommentList.as_view()