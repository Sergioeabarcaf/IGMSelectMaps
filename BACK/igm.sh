#!/bin/bash

sleep 30
python /home/pi/IGMSelectMaps/BACK/main.py &
sleep 30
cd /home/pi/IGMSelectMaps/WEB/selectorWeb
ng serve &
