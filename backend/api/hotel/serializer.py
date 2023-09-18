from rest_framework.serializers import ModelSerializer
from .model import Hotel

class HotelSerializer(ModelSerializer):
    class Meta:
        model= Hotel
        fields= "__all__"