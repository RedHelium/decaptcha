from django.http import HttpResponse
from django.shortcuts import redirect, render

# Create your views here.

def index(request):
    
    template = 'index.html'
    
    ctx = {
        
    }
    
    return render(request, template, ctx)

def verify_captcha(request):
    
    captcha = verify(request)
    
    if captcha['state']:
        print("Успешно пройдено")
    else:
        print("Капча не пройдена!")
    
    return redirect(index)

def verify(request):
    
    
    captcha_state = request.POST.get('decaptcha-result')
    
    if captcha_state is None:
        raise ValueError("DE-Капча не найдена!")
    
    result = {
        "message": "",
        "state": False
    }
    
    match captcha_state:
        case "":
            result['message'] = "Задача в капче не пройдена!"
        case "0":
            result['message'] = "Ответ в капче неправильный!"
        case "1":
            result['message'] = "Капча успешно решена!"
            result['state'] = True
        case _:
           result['message'] = "Неизвестный статус капчи!"
    
    return result

