from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
# Create your views here.

class BookList(generics.ListCreateAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= Book.objects.all()
    serializer_class= BookSerializer



