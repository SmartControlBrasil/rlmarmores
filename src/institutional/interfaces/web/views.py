from django.http import JsonResponse
from django.shortcuts import render

def health_check(request):
    """
    Technical health check endpoint returning the status and project identifier.
    """
    return JsonResponse({
        "status": "ok",
        "project": "rlmarmores"
    })

def home(request):
    """
    Home page view rendering the institutional index template.
    """
    return render(request, "institutional/pages/home.html")
