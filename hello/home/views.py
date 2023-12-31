from django.shortcuts import render,HttpResponse
from datetime import datetime
from home.models import Contact
from django.contrib import messages

# Create your views here..
def index(request):
    context = {
        'variable':"WELCOME TO FISHPOT"
    }
    return render(request,'index.html',context)


def about(request):
        return render(request,'about.html')

    # return HttpResponse("This is About Page")
from datetime import datetime
from .models import Contact  # Import your Contact model

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        mobilenumber = request.POST.get('mobilenumber')
        desc = request.POST.get('desc')
        email = request.POST.get('email')

        # Validate the form data (you can add more validation as needed)
        if not name or not mobilenumber or not desc or not email:
            # Handle invalid form data, for example, return an error response
            return render(request, 'error.html', {'error_message': 'Invalid form data'})

        # Create a Contact instance and save it
        contact = Contact(name=name, mobilenumber=mobilenumber, desc=desc, email=email, date=datetime.today())
        contact.save()
        messages.success(request, "we will be in touch with you soon .")

    return render(request, 'contact.html')


    # return HttpResponse("This is contact Page")
def services(request):
           return render(request,'services.html')

    # return HttpResponse("This is services page")

