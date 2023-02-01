
const Rental = require('../models/rental');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const RentalsController = {};


RentalsController.getAllRental = async (req, res) => {

    try {

        let result = await Rental.find({})
            .populate('userId')
            .populate('seriesId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}


RentalsController.newRental = async (req, res) => {

    try {

        let user = await Rental.create({
            userId: req.body.user_Id,
            seriesId: req.body.series_Id,
            rentalDate: req.body.rentalDate,
            returnDate: req.body.returnDate,
            price: req.body.price,
            nameSeries: req.body.nameSeries
        })

        if (user) {

            res.send({ "Message": `Hemos alquilado su serie con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

RentalsController.getUserSeries = async (req, res) => {
    let id = req.params.id

    try {

        let result = await Rental.find({userId: id})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = RentalsController;