from django.shortcuts import render
from django.views.generic.base import TemplateView

class CatalogView(TemplateView):
    template_name = "catalog.html"

class MainView(TemplateView):
    template_name = "index1.html"