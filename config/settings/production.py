from .base import *

DEBUG = False

if not SECRET_KEY:
    raise ValueError("DJANGO_SECRET_KEY não definida no ambiente de produção.")
