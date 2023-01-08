



//Importo método router() de la clase express
const router = require('express').Router();

const PelisRouter = require('./views/PelisRouter');
const UsersRouter = require('./views/UsersRouter');
const SeriesRouter = require('./views/SeriesRouter');

router.use("/pelis", PelisRouter);
router.use("/users", UsersRouter);
router.use("/series", SeriesRouter);

//Exporto router
module.exports = router;
