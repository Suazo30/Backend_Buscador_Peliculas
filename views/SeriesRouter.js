

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();


//Importo el middleware...
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesController');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/", SeriesController.newSeries);
router.put("/update", SeriesController.updateSeries);
router.delete("/delete", SeriesController.deleteSeries);
router.post("/trasmision", SeriesController.postSeriesByEpisodioSemanal);
router.post("/toprated", SeriesController.toprated);
router.post("/id", SeriesController.id);
router.get("/search/:name", SeriesController.name);
router.post("/teatrosCines", SeriesController.teatrosCines);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;

// PARAMETRO
// http://localhost:puerto/secreta/palabra
// Atravez de una ruta nos envia la palabra, los dos puntos nos va ayudar a diferenciar entre un parametro y una URL
// despues de los dos puntos express entiende que vamos a introducir una variable que vamos a introducir por URL y con la sintaxis de req.params.palabra podremos acceder a ella
// app.get('/secreta/:palabra', (req, res) => {
//     //aqui nos va imprimir la palabra
//     res.send(`La palabra secreta es ${req.params.palabra}`);
// })

// // // QUERY
// // // https://localhost:puerto/secreta?palabra=algo
// app.get('/secreta', (req, res) => {
//     //aqui nos va imprimir la palabra
//     res.send(`La palabra secreta es ${req.query.palabra}`);
// })