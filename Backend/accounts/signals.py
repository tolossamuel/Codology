from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

from .models import User, StudentProfile, TeacherProfile, ParentProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.user_type == 'student':
            StudentProfile.objects.create(user=instance)
        elif instance.user_type == 'teacher':
            TeacherProfile.objects.create(user=instance)
        elif instance.user_type == 'parent':
            ParentProfile.objects.create(user=instance)
