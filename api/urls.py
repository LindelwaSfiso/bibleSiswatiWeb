from django.urls import path
from .views import *

app_name = "api"
urlpatterns = [
    # filter with params
    path('bible/', BibleBook.as_view(), name='asv_bible'),
    path('set_up_books/', set_up_books, name="set_up_books"),
    path('asv/<str:book_name>/<int:chapter>/', asv_bible, name="asv_bible"),
    path('bbe/<str:book_name>/<int:chapter>/', bbe_bible, name="bbe_bible"),
    path('kjv/<str:book_name>/<int:chapter>/', kjv_bible, name="kjv_bible"),
    path('niv/<str:book_name>/<int:chapter>/', niv_bible, name="niv_bible"),
    path('siswati/<str:book_name>/<int:chapter>/', siswati_bible, name="siswati_bible"),
    path('wbt/<str:book_name>/<int:chapter>/', wbt_bible, name="wbt_bible"),
    path('ylt/<str:book_name>/<int:chapter>/', ylt_bible, name="ylt_bible"),
    path('zulu/<str:book_name>/<int:chapter>/', zulu_bible, name="zulu_bible"),

    path('verse_of_the_day/', verse_of_the_day, name="votd"),
]

