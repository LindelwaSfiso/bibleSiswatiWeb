# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class BibleVersionKey(models.Model):
    id = models.IntegerField(primary_key=True)
    tables = models.TextField()
    abbreviation = models.TextField()
    language = models.TextField()
    version = models.TextField()

    class Meta:
        db_table = 'bible_version_key'


class KeyEnglish(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    chapters_count = models.IntegerField()

    class Meta:
        db_table = 'key_english'


class Asv(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_asv'


class Bbe(models.Model):
    id = models.TextField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_bbe'


class Kjv(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_kjv'


class Niv(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_niv'


class Siswati(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_siswati'


class Wbt(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_wbt'


class Ylt(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_ylt'


class Zulu(models.Model):
    id = models.IntegerField(primary_key=True)
    book_number = models.IntegerField()
    chapter = models.IntegerField()
    verse_number = models.IntegerField()
    verse_text = models.TextField()

    class Meta:
        db_table = 't_zulu'


