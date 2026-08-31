import pytest
from django.urls import reverse

@pytest.mark.django_db
def test_home_page_status_code(client):
    url = reverse('institutional:home')
    response = client.get(url)
    assert response.status_code == 200
    assert b"RLMarmores" in response.content
