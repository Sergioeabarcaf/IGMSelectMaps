import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
RED = 25
GREEN = 24
BLUE = 23
GPIO.setup(RED,GPIO.OUT)
GPIO.output(RED,0)
GPIO.setup(GREEN,GPIO.OUT)
GPIO.output(GREEN,0)
GPIO.setup(BLUE,GPIO.OUT)
GPIO.output(BLUE,0)

def loadInit():
    GPIO.output(BLUE,1)
    time.sleep(12)
    GPIO.output(BLUE,0)
    GPIO.output(GREEN,1)

def errorSerial():
    i = 0
    GPIO.output(GREEN,0)
    while(i<10):
        GPIO.output(RED,1)
        time.sleep(0,5)
        GPIO.output(RED,0)
        time.sleep(0,5)
        i += 1

def off():
    i = 0
    GPIO.output(GREEN,0)
    while(i<5):
        GPIO.output(RED,1)
        time.sleep(0,8)
        GPIO.output(RED,0)
        time.sleep(0,5)
        i += 1