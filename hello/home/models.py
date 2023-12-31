from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=122)
    mobilenumber = models.IntegerField()
    desc= models.TextField()
    email  = models.EmailField(default="example@example.com")
    date = models.DateField()
    
    def __str__(self):
        return self.name

