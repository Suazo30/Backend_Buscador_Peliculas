

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const PelisController = require('../controllers/PelisController');

//Endpoints

router.get("/", PelisController.getAllPelis);
router.post("/", PelisController.newPelis);
router.put("/", PelisController.updatePelis);
router.delete("/", PelisController.deletePelis);
router.post("/toprated", PelisController.toprated);
router.post("/id", PelisController.id);
router.post("/name", PelisController.name);
router.post("/category", PelisController.category);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;