from rest_framework import serializers
from .models import *


class BibleVersionKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = BibleVersionKey
        fields = '__all__'


class KeyEnglishSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyEnglish
        fields = '__all__'


class AsvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asv
        fields = '__all__'


class BbeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bbe
        fields = '__all__'


class KjvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kjv
        fields = '__all__'


class NivSerializer(serializers.ModelSerializer):
    class Meta:
        model = Niv
        fields = '__all__'


class SiswatiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Siswati
        fields = '__all__'


class WbtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wbt
        fields = '__all__'


class YltSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ylt
        fields = '__all__'


class ZuluSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zulu
        fields = '__all__'
