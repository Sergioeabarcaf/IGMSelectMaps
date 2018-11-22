# IGMSelectMaps
proyecto que permite seleccionar el mapa a desplegar en cubo IGM. Se compone de dos carpetas: WEB donde esta desarrollado el portal web en Angular para la selección del mapa y BACK desarrollada en python para comunicarse con el modulo arduino. 

## Version 0.1
### WEB
* Instalación de base para proyecto con mejoras aplicadas por npm audit fix.
* Instalación de bootstrap 4 via NPM.
* Uso se APP.component para cargar dos imagenes y enviar via MQTT su id.
* Separacion de componentes en HOME, LOAD y HEADER.
* Traspaso de subscripciones aun servicio mqtt-igm.service.
* Uso de logos de proteinlab e IGM en header.

### BACK
* Creacion de main.py subscrito al topico send.
* Busca el id recibido en un archivo JSON y muestra la matriz correspondiente.
* Una vez encontrado, espera 3 segundo y publica en load un true. 
* Creacion de bash para cargar sistema desde el arranque en RPI.

## Version 0.2
### WEB
* Modificaciones en el envio de datos MQTT (de numneros a letras).
* Se agrega boton para llevar todos los motores a cero.
* Se elimina propiedad img en header y se utilizan clases de bootstrap para el ancho de las imagenes.
* En componente home se usa un w-75 para las imagenes.
* Posicion vertical de cuadrados se ajusta al 60%.
* Cambio de posicion en boton que lleva todos los motores a cero (abajo de mapas) y se cambia la descripción.

### BACK
* Se realiza comunicacion serial entre python y arduino, se envia la letra del mapa seleccionado en angular y se espera la respuesta desde arduino cuando termine de cargar el modulo.
* Se elimina la funcion searchJSON ya que era de prueba. Ahora se utiliza la funcion comSerial.
* Se crea README en carpeta para entender la nomenclatura y librerias necesarias.
* Se agrega envio de mensajes al topico error para luego desplegarlos en angular.
* Se agrega mas tiempo para iniciar sistema (30 segundos por cada componente).
* Reparacion de paquetes con errores (menos actualizar @angular/cli).
