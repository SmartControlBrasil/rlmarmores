from django.urls import path
from .views import health_check, home

app_name = 'institutional'

urlpatterns = [
    path('', home, name='home'),
    path('health/', health_check, name='health_check'),
]
