import ssl
import sys
import json
import time
import serial 
import paho.mqtt.client
import paho.mqtt.publish as publish
import ledRGB
import os

ser = serial.Serial('/dev/ttyUSB0')
ser.baudrate = 115200

host = "192.168.1.197"

def comSerial(map):
    if(ser.is_open):
        ser.write(map)
        while(True):
            x = ser.read()
            print x
            if x == 'T':
                publish.single('load','true',hostname=host)
                break
            if x == '0':
                publish.single('error','La letra enviada no corresponde a los mapas.',hostname=host)
                break
    else:
        ledRGB.errorSerial()
        publish.single('error','Comunicacion serial esta cerrada',hostname=host)

def on_connect(client, userdata, flags, rc):
    print('connected (%s)' % client._client_id)
    client.subscribe(topic='send', qos=2)
 
def on_message(client, userdata, message):
    if(message.payload == "off"):
        ser.write('y')
        ledRGB.off()
        while(True):
            x = ser.read()
            if x == 'T':
                break
        os.system("sudo reboot")
    else:
        comSerial(message.payload)

 
def main():
    ledRGB.loadInit()
    client = paho.mqtt.client.Client(client_id='pythonIGM', clean_session=False)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(host=host, port=1883)
    time.sleep(5)
    os.system("chromium-browser --start-fullscreen &")
    client.loop_forever()

if __name__ == '__main__':
    main()
 
sys.exit(0)