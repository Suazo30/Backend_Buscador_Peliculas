

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesController');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/", SeriesController.newSeries);
router.post("/", auth, SeriesController.postSeriesByEpisodioSemanal);

router.post("/toprated", SeriesController.toprated);
router.post("/id", SeriesController.id);
router.post("/name", SeriesController.name);
router.post("/teatrosCines", SeriesController.teatrosCines);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;