
from django.contrib import admin
from django.urls import path
from api.views import all_post_view,comment_list_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/',all_post_view,name='all_post'),
    path('api/posts/comments/<int:postid>/', comment_list_view, name='comment_list'),
]
