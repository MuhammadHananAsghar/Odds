from .views import apiOddView
from django.urls import path

urlpatterns = [
    path('api/', apiOddView, name='apiOddView')
]