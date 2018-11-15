#!/bin/bash

sleep 5
python /home/pi/IGMSelectMaps/BACK/main.py &
sleep 5
cd /home/pi/IGMSelectMaps/WEB/selectorWeb
ng serve &