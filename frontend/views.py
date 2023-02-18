from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def about_us(request):
    return render(request, 'frontend/index.html')

def versions(request):
    return render(request, 'frontend/index.html')

def verse_of_the_day(request):
    return render(request, 'frontend/index.html')
