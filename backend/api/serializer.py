from rest_framework import serializers
from django.core.validators import MaxLengthValidator
from api.models import Post,Comment

class PostSerializer(serializers.ModelSerializer):

    post_content = serializers.CharField(
        validators=[MaxLengthValidator(350, message="Character limit exceeded. Maximum 350 characters allowed.")]
    )

    class Meta:
        model=Post
        fields=['id','post_content','created_at']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'comment_content', 'created_at']

        def create(self, validated_data):
            post_id = self.context['view'].kwargs['postid']
            validated_data['post'] = Post.objects.get(id=post_id)
            return super().create(validated_data)