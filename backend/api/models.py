from django.db import models

# Create your models here.
class Post(models.Model):
    post_content=models.TextField()

    def __str__(self) -> str:
        return str(self.id)

