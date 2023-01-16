## Proyecto Backend Buscador Peliculas

El objetivo de este proyecto es crear la parte de backend donde en la base de datos MongoDB que es un sistema NoSQL el cual esta orientado a documentos, almacenaremos peliculas, series y usuarios.

Esto nos permitira la consulta de datos y desde Postman seremos capaces de buscar informacion concreta en nuestra base de datos mediante los endpoint que hemos creado en el Visual Studio.

En el siguiente proyecto se han puesto en practica los conocimientos que hemos adquirido durante la enseñanza impartida por GeeksHups Academy.

## Descripcion:

Para la busqueda de informacion sobre peliculas y series se han creado varios endpoints de consulta:

Peliculas:
- router.post("/", PelisController.newPelis) Con esta ruta URL podremos subir cada una de las pelicula a la  base de datos. 
http://localhost:5505/pelis 

- router.get("/", PelisController.getAllPelis) Esta ruta URL nos permitira obtener todas las peliculas de    nuestra base de datos.
http://localhost:5505/pelis

- router.post("/toprated", PelisController.toprated) Con esta ruta URL podremos ver las peliculas segun su puntuacion.
http://localhost:5505/pelis/toprated

- router.post("/category", PelisController.category) En esta ruta URL le pasaremos por body un genero y obtendremos las peliculas segun el tipo de categoría.
http://localhost:5505/pelis/category

- router.post("/id", PelisController.id) Con esta ruta URL podremos ver las peliculas segun su id.
http://localhost:5505/pelis/id
  
- router.post("/name", PelisController.name) En esta ruta URL obtendremos las peliculas por su nombre.
http://localhost:5505/pelis/name

- router.put("/update", PelisController.updatePelis); Esto nos permitira modificar una pelicula.
http://localhost:5505/pelis/update 

- router.delete("/delete", PelisController.deletePelis); Esto nos permitira borrar un pelicula.
http://localhost:5505/pelis/delete

Series:
- router.post("/", SeriesController.newSeries)  Con esta ruta URL podremos subir cada una de las series a la base de datos. 
http://localhost:5505/series

- router.get("/", SeriesController.getAllSeries) Esta ruta URL nos permitira obtener todas las series de nuestra base de datos.
http://localhost:5505/series

- router.post("/toprated", SeriesController.toprated) Con esta ruta URL podremos ver las series segun su puntuacion.
http://localhost:5505/series/toprated

- router.post("/id", SeriesController.id) Con esta ruta URL podremos ver las series segun su id.
http://localhost:5505/series/id

- router.post("/name", SeriesController.name) En esta ruta URL obtendremos las series por su nombre.
 http://localhost:5505/series/name

- router.post("/trasmision", SeriesController.postSeriesByEpisodioSemanal) Por medio de esta ruta URL nos buscara las series por cada nuevo episodiosemanal.
 http://localhost:5505/series/trasmision

- router.post("/teatrosCines", SeriesController.teatrosCines) Aqui le pasaremos por body las series y sabremos si esta siendo transmitida en cines o teatros. 
 http://localhost:5505/series/teatrosCines

- router.put("/update", SeriesController.updateSeries); Esto nos permitira modificar un serie.
http://localhost:5505/series/update 

- router.delete("/delete", SeriesController.deleteSeries); Esto nos permitira borrar un serie.
http://localhost:5505/series/delete

Users:
- router.get("/", UsersController.getAllUsers) Esta ruta URL nos mostrara todos los usuarios.  
http://localhost:5505/users

- router.post("/newuser", UsersController.newUser) Esto nos permitira crear un nuevo usuario con la siguiente informacion: name, surname, email, password, phone y dni.
http://localhost:5505/users/newuser

- router.post("/login", UsersController.loginUser) Aqui el usuario podra registarse, a la vez obtendra un token el cual le permitira acceder a las diferentes series y peliculas. 
http://localhost:5505/users/login

- router.put("/update", UsersController.updateUser); Esto nos permitira modificar un usuario.
http://localhost:5505/users/update 

- router.delete("/delete", UsersController.deleteUser); Esto nos permitira borrar un usuario.
http://localhost:5505/users/delete


## Tecnologias:

En este proyecto se han implementado las siguiente tecnologias:

- Node con Express
Node ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.

Express es un framework para crear aplicaciones web en Node.js
Proporciona un conjunto sólido de características para las aplicaciones web y móviles. Nos ayuda
en la creación de nuestro sistema para no tener que empezar de cero utilizando buenas prácticas.

- MongoDB 
Es un sistema de base de datos NoSQL orientado a documentos, desarrollado bajo código abierto.
Básicamente en lugar de guardar los datos en tablas como se hace en las base de datos, se
almacenan documentos similares a JSON pero utiliza una especificación denominada BSON.
La primera versión se lanzó en el año 2009.

- Postman
Postman en sus inicios nace como una extensión que podía ser utilizada en el navegador Chrome de Google y básicamente nos permite realizar peticiones de una manera simple para testear APIs de tipo REST propias o de terceros.

Gracias a los avances tecnológicos, Postman ha evolucionado y ha pasado de ser de una extensión a una aplicación que dispone de herramientas nativas para diversos sistemas operativos como lo son Windows, Mac y Linux.

- Mongoose 
Mongoose es una librería para Node. js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.

- Docker
Docker es una plataforma de virtualización a nivel de sistema operativo y, permite crear una
aplicación y empaquetarla junto con sus dependencias y librerías en un contenedor que será
capaz de ejecutarse en cualquier otra máquina.
Herramienta de creación y administración de contenedores para ejecutar nuestras aplicaciones.
Fue desarrollado en 2013 y está escrito en Go.
Actualmente Docker es una estándar en el desarrollo aplicaciones y es el corazón de la metodología
DevOps.