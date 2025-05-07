from django.db import models

class Sensor(models.Model):
    sensor = models.CharField(max_length=100)
    mac_address = models.CharField(max_length=100)
    unidade_med = models.CharField(max_length=50)
    latitude = models.FloatField()
    longitude = models.FloatField()

class Ambiente(models.Model):
    sig = models.CharField(max_length=10)
    descricao = models.CharField(max_length=100)
    ni = models.CharField(max_length=20)
    responsavel = models.CharField(max_length=100)

class HistoricoTemperatura(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE)
    valor = models.CharField(max_length=50)
    timestamp = models.CharField(max_length=100)

class HistoricoLuminosidade(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE)
    valor = models.CharField(max_length=50)
    timestamp = models.CharField(max_length=100)

class HistoricoUmidade(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE)
    valor = models.CharField(max_length=50)
    timestamp = models.CharField(max_length=100)

class HistoricoContador(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE)
    valor = models.FloatField()
    timestamp = models.CharField(max_length=100)

