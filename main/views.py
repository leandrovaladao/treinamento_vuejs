from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class MainScreenView(TemplateView):
    template_name = 'frontend/index.html'