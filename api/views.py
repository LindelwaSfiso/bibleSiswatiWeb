from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
import numpy.random as rn
import random

from .serializers import *
from .utils import get_serializer_class, get_query_set, get_book_range, BOOKS_ENGLISH, BOOKS_ZULU, BOOKS_SISWATI


# Create your views here.
class VersesPagination(PageNumberPagination):
    page_size = 50


class BibleBook(generics.ListAPIView):
    pagination_class = VersesPagination

    def get_serializer_class(self):
        version = self.request.query_params.get('version', 'siswati')
        return get_serializer_class(version=version)

    def get_queryset(self):
        version = self.request.query_params.get('version')
        book_name = self.request.query_params.get('book')
        chapter = int(self.request.query_params.get('chapter', 1))
        book_name = clean_book_name(book_name)

        if version is None or book_name is None or chapter is None:
            raise ValueError("Invalid parameters. Version, chapter and book name required")

        return get_query_set(version, book_name, chapter)

    def get(self, request, *args, **kwargs):
        version = self.request.query_params.get('version')
        book_name = self.request.query_params.get('book')
        chapter = int(self.request.query_params.get('chapter', 1))

        if version is None or book_name is None or chapter is None:
            raise Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"Invalid parameters. Version, chapter and book name required"}
            )

        try:
            data = self.get_serializer_class()(
                get_query_set(version, book_name, chapter), many=True
            ).data
            return Response(status=status.HTTP_200_OK, data=data)
        except ValueError:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"Invalid parameters. Version, chapter and book name required"}
            )


@api_view(["GET"])
def asv_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)

    print(book_name, chapter, book_name.capitalize(), book_name.capitalize() not in BOOKS_ENGLISH)

    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = AsvSerializer(get_query_set("asv", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def bbe_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = BbeSerializer(get_query_set("bbe", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def kjv_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = KjvSerializer(get_query_set("kjv", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def niv_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = NivSerializer(get_query_set("niv", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def siswati_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_SISWATI:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = SiswatiSerializer(get_query_set("siswati", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def wbt_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = WbtSerializer(get_query_set("wbt", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def ylt_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ENGLISH:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = YltSerializer(get_query_set("ylt", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


@api_view(["GET"])
def zulu_bible(request, book_name, chapter):
    book_name = clean_book_name(book_name)
    if book_name not in BOOKS_ZULU:
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "message": "Requested book not found"
            }
        )

    data = ZuluSerializer(get_query_set("zulu", book_name, chapter), many=True).data
    return Response(status=status.HTTP_200_OK, data=data)


def set_up_books(request, version):
    return Response()


def clean_book_name(book_name="adadada"):
    """Replace space character"""
    book_name = book_name.replace("%20", " ")
    if book_name[0].isdigit():
        return book_name[:2] + book_name[2].capitalize() + book_name[3:]
    return book_name.capitalize()


@api_view(["GET"])
def verse_of_the_day(response):
    version = random.choice([(Niv,NivSerializer), (Siswati, SiswatiSerializer), (Asv, AsvSerializer), \
        (Bbe, BbeSerializer), (Kjv,KjvSerializer), (Wbt,WbtSerializer), (Ylt,YltSerializer), (Zulu,ZuluSerializer)])
    verse = rn.choice(version[0].objects.all())
    data = version[1](verse).data
    return Response(status=status.HTTP_200_OK, data=data)
