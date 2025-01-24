from django.contrib import admin
from .models import User
from .models import CustomUser
# Register your models here.
admin.site.register(User)

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_active')
