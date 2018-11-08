# IGMSelectMaps
proyecto que permite seleccionar el mapa a desplegar en cubo IGM. Se compone de dos carpetas: WEB donde esta desarrollado el portal web en Angular para la selección del mapa y BACK desarrollada en python para comunicarse con el modulo arduino. 

## Version 0.1
### WEB
* Instalación de base para proyecto con mejoras aplicadas por npm audit fix.
* Instalación de bootstrap 4 via NPM.
* Uso se APP.component para cargar dos imagenes y enviar via MQTT su id.

### BACK
* Creacion de main.py subscrito al topico send.
* Busca el id recibido en un archivo JSON y muestra la matriz correspondiente.
* Una vez encontrado, espera 3 segundo y publica en load un true. 
