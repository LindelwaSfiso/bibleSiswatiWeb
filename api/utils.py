from .serializers import *
from .constants import BOOKS_SISWATI, BOOKS_ENGLISH, BOOKS_ZULU


def get_serializer_class(version='kjv'):
    if version == 'asv':
        return AsvSerializer
    elif version == 'bbe':
        return BbeSerializer
    elif version == 'kjv':
        return KjvSerializer
    elif version == 'niv':
        return NivSerializer
    elif version == 'siswati':
        return SiswatiSerializer
    elif version == 'wbt':
        return WbtSerializer
    elif version == 'ylt':
        return YltSerializer
    else:
        return ZuluSerializer


def get_book_range(version="kjv", book_name="Genesis", chapter=1):
    if version == 'siswati':
        index = BOOKS_SISWATI.index(book_name) + 1
    elif version == 'zulu':
        index = BOOKS_ZULU.index(book_name) + 1
    else:
        index = BOOKS_ENGLISH.index(book_name) + 1

    startIndex = f"{index:02}{chapter:03}000"
    endIndex = f"{index:02}{chapter+1:03}000"

    print(startIndex, endIndex)

    return int(startIndex), int(endIndex)


def get_query_set(version="kjv", book_name="genesis", chapter=2):
    (startIndex, endIndex) = get_book_range(version, book_name, chapter)
    print(book_name, chapter)

    if version == 'asv':
        return Asv.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'bbe':
        return Bbe.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'kjv':
        return Kjv.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'niv':
        return Niv.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'siswati':
        return Siswati.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'wbt':
        return Wbt.objects.filter(id__range=(startIndex, endIndex))

    elif version == 'ylt':
        return Ylt.objects.filter(id__range=(startIndex, endIndex))

    else:
        return Zulu.objects.filter(id__range=(startIndex, endIndex))
