from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home_frontend"),
    path('bible', views.index, name="read_bible"),

    path('asv/', views.index, name="asv_bible"),
    path('bbe/', views.index, name="bbe_bible"),
    path('kjv/', views.index, name="kjv_bible"),
    path('niv/', views.index, name="niv_bible"),
    path('siswati/', views.index, name="siswati_bible"),
    path('wbt/', views.index, name="wbt_bible"),
    path('ylt/', views.index, name="ylt_bible"),
    path('zulu/', views.index, name="zulu_bible"),

    path('asv/<str:book_name>/<int:chapter>/', views.index, name="asv_bible"),
    path('bbe/<str:book_name>/<int:chapter>/', views.index, name="bbe_bible"),
    path('kjv/<str:book_name>/<int:chapter>/', views.index, name="kjv_bible"),
    path('niv/<str:book_name>/<int:chapter>/', views.index, name="niv_bible"),
    path('siswati/<str:book_name>/<int:chapter>/', views.index, name="siswati_bible"),
    path('wbt/<str:book_name>/<int:chapter>/', views.index, name="wbt_bible"),
    path('ylt/<str:book_name>/<int:chapter>/', views.index, name="ylt_bible"),
    path('zulu/<str:book_name>/<int:chapter>/', views.index, name="zulu_bible"),

    path('about-us/', views.about_us),
    path('versions/', views.versions),
    path('verse-of-the-day/', views.verse_of_the_day)
]

