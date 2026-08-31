from django.http import JsonResponse

def health_check(request):
    """
    Technical health check endpoint returning the status and project identifier.
    """
    return JsonResponse({
        "status": "ok",
        "project": "rlmarmores"
    })
