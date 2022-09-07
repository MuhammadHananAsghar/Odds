from .views import OddAPIView
from django.urls import path

urlpatterns = [
    path('api/', OddAPIView.as_view(), name='OddAPIView')
]