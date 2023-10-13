from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("hotel/", include("hotel.urls")),
    path("ubicacion/", include("core.urls")),
]
