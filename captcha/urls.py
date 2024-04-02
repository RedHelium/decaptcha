


from django.urls import path, re_path
from .views import index, verify_captcha

urlpatterns = [
    path('', index, name='home'),
    re_path(r'^verify-captcha/', verify_captcha, name='verify_captcha')
]