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

Users:
- router.get("/", UsersController.getAllUsers) Esta ruta URL nos mostrara todos los usuarios.  
http://localhost:5505/users

- router.post("/newuser", UsersController.newUser) Esto nos permitira crear un nuevo usuario con la siguiente informacion: name, surname, email, password, phone y dni.
http://localhost:5505/users/newuser

- router.post("/login", UsersController.loginUser) Aqui el usuario podra registarse, a la vez obtendra un token el cual le permitira acceder a las diferentes series y peliculas. 
http://localhost:5505/users/login


## Tecnologias:

En este proyecto se han implementado las siguiente tecnologias:

- Node con Express
- MongoDB
- Postman
- Mongoose 