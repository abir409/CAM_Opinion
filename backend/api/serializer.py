from rest_framework import serializers
from api.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=['id','post_content']

    
    # def create(self, validated_data):
    #     return Post.objects.create(**validated_data)