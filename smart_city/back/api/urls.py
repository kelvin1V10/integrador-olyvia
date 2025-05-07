from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'sensores', SensorViewSet)
router.register(r'ambientes', AmbienteViewSet)
router.register(r'historico-temperatura', HistoricoTemperaturaViewSet)
router.register(r'historico-luminosidade', HistoricoLuminosidadeViewSet)
router.register(r'historico-umidade', HistoricoUmidadeViewSet)
router.register(r'historico-contador', HistoricoContadorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
