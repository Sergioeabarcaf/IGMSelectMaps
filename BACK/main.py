import ssl
import sys
import json
import time
 
import paho.mqtt.client
import paho.mqtt.publish as publish

def searchJSON(id):
   maps = json.loads(open('maps.json').read())
   for map in maps:
       if map['id'] == id:
           print map
           time.sleep(3)
           publish.single('load','true',hostname="192.168.1.145")

def on_connect(client, userdata, flags, rc):
    print('connected (%s)' % client._client_id)
    client.subscribe(topic='send', qos=2)
 
def on_message(client, userdata, message):
    print('------------------------------')
    return searchJSON(message.payload)

 
def main():
    client = paho.mqtt.client.Client(client_id='albert-subs', clean_session=False)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(host='192.168.1.145', port=1883)
    client.loop_forever()
 
if __name__ == '__main__':
    main()
 
sys.exit(0)