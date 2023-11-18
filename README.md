# 🍔 Hamburgueseria 🍔  


## 📋 Descripcion 
BurgerHub API es un proyecto que se centra en proporcionar consultas hechas por MongoDB. Este proyecto se enfoca en el desarrollo de un backend que ofrece 40 endpoints especializados para gestionar eficientemente todos los aspectos de la operación de una hamburguesería.

## 📒 Base de datos 

![logo](./imgs/DB-Hamburgueseria.png)

## 📚 Inicializacion del proyecto
Inicializar el proyecto 

Primero se debe agregar en la carpeta backend el archivo **.env**, copiar la estructura que se encuentra en el archivo **.env.example** y cambiarle los datos por los siguientes (El lugar de "password" se debe cambiar por una clave la cual se le proporcionará al profesor externamente): 

* PORT98348 = 7777
* MONGODBURI = mongodb+srv://campus:password@hamburgueseriacluster.uqzzdoj.mongodb.net/

Se inicializan una terminal y se coloca: 

```bash
npm i 
```

```bash
npm start 
```

## <img src="./imgs/swagger-logo.svg" width="25" style="position: relative; top: .3rem;"> Documentacion con Swagger

Despues de inicializado el proyecto ya va ser posible el poder probar las diferentes funcionalidades de la api en la siguiente url mediante el archivo generado por Swagger:

>http://localhost:PORT/documentation 

Al abrir el link vas a poder encontrar algo parecido a la siguiente imagen:

<img src="./frontend/src/assets/imgs/swagger.jpeg" width="1000rem">