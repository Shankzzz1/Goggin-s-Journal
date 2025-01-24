from django.db import models
from django.contrib.auth.models import AbstractUser

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Use hashed passwords for security

    def __str__(self):
        return self.email
    

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'  # Use email as the username field
    REQUIRED_FIELDS = ['username']  # Specify other required fields, if needed

    def __str__(self):
        return self.email


