from rest_framework import viewsets
from .models import *
from .serializers import *

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer

class AmbienteViewSet(viewsets.ModelViewSet):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer

class HistoricoTemperaturaViewSet(viewsets.ModelViewSet):
    queryset = HistoricoTemperatura.objects.all()
    serializer_class = HistoricoTemperaturaSerializer

class HistoricoLuminosidadeViewSet(viewsets.ModelViewSet):
    queryset = HistoricoLuminosidade.objects.all()
    serializer_class = HistoricoLuminosidadeSerializer

class HistoricoUmidadeViewSet(viewsets.ModelViewSet):
    queryset = HistoricoUmidade.objects.all()
    serializer_class = HistoricoUmidadeSerializer

class HistoricoContadorViewSet(viewsets.ModelViewSet):
    queryset = HistoricoContador.objects.all()
    serializer_class = HistoricoContadorSerializer
