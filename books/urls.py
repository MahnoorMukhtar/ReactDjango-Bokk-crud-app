from django.urls import path
from books.views import *

urlpatterns = [
    path('books/', BookList.as_view(), name="book-list"),
    path('books/<str:pk>/', BookDetail.as_view(), name="book-detail"),
]

