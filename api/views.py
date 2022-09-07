from django.shortcuts import render
from django.http import JsonResponse
from django.views import View


class OddAPIView(View):
    def get(self, request):
        return JsonResponse({"resp": "rrrrrrr"})