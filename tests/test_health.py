import pytest
from django.urls import reverse

def test_health_check(client):
    url = reverse('health_check')
    response = client.get(url)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["project"] == "rlmarmores"
