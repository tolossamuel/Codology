from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, StudentProfile, TeacherProfile, ParentProfile

from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User


admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(TeacherProfile)
admin.site.register(ParentProfile)
