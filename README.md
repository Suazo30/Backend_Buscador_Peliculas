## Proyecto Backend Buscador Peliculas

El objetivo de este proyecto es crear la parte de backend donde en la base de datos MongoDB que es un sistema NoSQL el cual esta orientado a documentos, almacenaremos peliculas, series y usuarios.

Esto nos permitira la consulta de datos y desde Postman seremos capaces de buscar informacion concreta de la API thenmoviedB mediante endpoints

En el siguiente proyecto se han puesto en practica los conocimientos que hemos adquirido durante la enseñanza impartida por GeeksHups Academy.

## Descripcion:

Para la busqueda de informacion sobre peliculas y series se han creado varios endpoints de consulta:

Peliculas:
- [post] http://localhost:5505/pelis Con esta ruta URL podremos subir cada una de las pelicula a la base de datos. 
- [get] http://localhost:5505/pelis Esta ruta URL nos permitira obtener todas las peliculas de nuestra base de datos.
- [get] http://localhost:5505/pelis/toprated Con esta ruta URL podremos ver las peliculas segun su puntuacion.
- [get] http://localhost:5505/pelis/category En esta ruta URL le pasaremos por body un genero y obtendremos las peliculas segun el tipo de categoría.
- [get] http://localhost:5505/pelis/id Con esta ruta URL podremos ver las peliculas segun su id.
- [get] http://localhost:5505/pelis/name En esta ruta URL obtendremos las peliculas por su nombre.

Series:
- [post] http://localhost:5505/series Con esta ruta URL podremos subir cada una de las series a la base de datos. 
- [get] http://localhost:5505/series Esta ruta URL nos permitira obtener todas las series de nuestra base de datos.
- [get] http://localhost:5505/series/toprated Con esta ruta URL podremos ver las series segun su puntuacion.
- [get] http://localhost:5505/series/id Con esta ruta URL podremos ver las series segun su id.
- [get] http://localhost:5505/series/name En esta ruta URL obtendremos las series por su nombre.
- [get] http://localhost:5505/series/episodiosemanal Por medio de esta ruta URL nos buscara las series por cada episodiosemanal.
- [get] http://localhost:5505/series/teatroscines Aqui le pasaremos por body las series y sabremos si esta siendo transmitida en cines o teatros. 

Users:
- [get] http://localhost:5505/users Esto nos permitira crear un nuevo usuario con la siguiente informacion: name, surname, email, password, phone y dni.
- [get] http://localhost:5505/users/login Aqui el usuario podra registarse, a la vez obtendra un token el cual le permitira acceder a las diferentes series y peliculas.   

## Tecnologias:

En este proyecto se han implementado las siguiente tecnologias:

- Node con Express
- MongoDB
- Postman
- Mongoose 