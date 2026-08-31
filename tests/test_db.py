import pytest
from django.db import connection


@pytest.mark.django_db
def test_database_is_postgresql_and_isolated():
    assert connection.vendor == "postgresql"

    with connection.cursor() as cursor:
        cursor.execute("SELECT current_database()")
        database_name = cursor.fetchone()[0]

    assert database_name != "rlmarmores"
