import ssl
import sys
import json
import time
import serial 
import paho.mqtt.client
import paho.mqtt.publish as publish

ser = serial.Serial('/dev/ttyACM0')
ser.baudrate = 115200

def comSerial(map):
    if(ser.is_open):
        ser.write(map)
        while(True):
            x = ser.read()
            print x
            if x == 'T':
                publish.single('load','true',hostname="192.168.1.198")
                break
            if x == '0':
                publish.single('error','La letra enviada no corresponde a los mapas.',hostname="192.168.1.198")
                break
    else:
        publish.single('error','Comunicacion serial esta cerrada',hostname="192.168.1.198")

def on_connect(client, userdata, flags, rc):
    print('connected (%s)' % client._client_id)
    client.subscribe(topic='send', qos=2)
 
def on_message(client, userdata, message):
    return comSerial(message.payload)

 
def main():
    client = paho.mqtt.client.Client(client_id='pythonIGM', clean_session=False)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(host='192.168.1.198', port=1883)
    client.loop_forever()
 
if __name__ == '__main__':
    main()
 
sys.exit(0)