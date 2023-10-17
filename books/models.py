from django.db import models

# Create your models here.

class Book(models.Model):
    title= models.CharField(max_length=30)
    description= models.TextField(default="")
    author = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return '%s by %s' %(self.title, self.author)