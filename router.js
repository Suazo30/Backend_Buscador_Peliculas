



//Importo método router() de la clase express
const router = require('express').Router();

const PelisRouter = require('./views/PelisRouter');
const UsersRouter = require('./views/UsersRouter');
const SeriesRouter = require('./views/SeriesRouter');
const RentalsRouter = require('./views/RentalsRouter');


router.use("/pelis", PelisRouter);
router.use("/users", UsersRouter);
router.use("/series", SeriesRouter);
router.use("/rentals", RentalsRouter);



//Exporto router
module.exports = router;
