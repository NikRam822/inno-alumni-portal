from django.urls import include, path
from rest_framework import routers
from . import views
from .views import AlumniDetailAPI, RegisterAlumniAPIView, PassOrderAPI, ElectiveCourseDetailAPI, VerifyMailAPI, UpdateProfileAPI, RequestCourseAPI, BookedCoursesDetailAPI

router = routers.DefaultRouter()
router.register(r'alumni', views.AlumniViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("accounts/profile/", AlumniDetailAPI.as_view()),
    path('register', RegisterAlumniAPIView.as_view()),
    path('pass/', PassOrderAPI.as_view()),
    path('courses/', ElectiveCourseDetailAPI.as_view()),
    path('courses/booked', BookedCoursesDetailAPI.as_view()),
    path('confirm/email', VerifyMailAPI.as_view()),
    path('update', UpdateProfileAPI.as_view()),
    path('request/course', RequestCourseAPI.as_view())
]