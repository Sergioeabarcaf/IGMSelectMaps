#!/bin/bash

sleep 20
python /home/pi/IGMSelectMaps/BACK/main.py &
sleep 10
cd /home/pi/IGMSelectMaps/WEB/selectorWeb/dist
http-server &
