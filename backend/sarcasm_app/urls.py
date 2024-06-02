
from django.contrib import admin
from django.urls import path
from api.views import all_post_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/',all_post_view,name='all_post'),

]
