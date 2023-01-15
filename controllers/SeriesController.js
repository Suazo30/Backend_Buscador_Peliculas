

const Series = require('../models/series');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const SeriesController = {};


SeriesController.getAllSeries = async (req, res) => {

    try {

        let result = await Series.find({})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.newSeries = async (req, res) => {

    try {

        let user = await Series.create({
            name: req.body.name,
            actors: req.body.actors,
            year: req.body.year,
            category: req.body.category,
            toprated: req.body.toprated,
            episodioSemanal: req.body.episodioSemanal,
            verEnCineTeatro: req.body.verEnCineTeatro        
        })

        if (user) {

            res.send({ "Message": `Su serie se ha alquilado con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSeries = async (req, res) => {

    try {

        let user = await Series.create({
            name: req.body.name,
            actors: req.body.actors,
            year: req.body.year,
            category: req.body.category,
            toprated: req.body.toprated,
            episodioSemanal: req.body.episodioSemanal,
            verEnCineTeatro: req.body.verEnCineTeatro        
        })

        if (user) {

            res.send({ "Message": `Su serie se ha alquilado con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.deleteSeries = async (req, res) => {
    let _id = req.body._id;

    try {
        await Series.findByIdAndDelete(_id)
            .then(series => {
                res.send({ "Message": `El series ${series.name} se ha eliminado con éxito` })
            })
    } catch (error) {
        console.log("Error deleting series", error);

    }
};

SeriesController.postSeriesByEpisodioSemanal = async (req, res) => {


    const episodioSemanal = req.body.episodioSemanal 
    try {

        let result = await Series.find({episodioSemanal:episodioSemanal})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.toprated = async (req, res) => {


    const toprated = req.body.toprated 
    try {

        let result = await Series.find({toprated:toprated})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.id = async (req, res) => {


    const _id = req.body._id 
    try {

        let result = await Series.find({_id:_id})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.name = async (req, res) => {


    const name = req.body.name 
    try {

        let result = await Series.find({name:name})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.teatrosCines = async (req, res) => {


    const teatrosCines = req.body.teatrosCines 
    try {

        let result = await Series.find({teatrosCines:teatrosCines})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie." })
        }

    } catch (error) {
        console.log(error);
    }
}


//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;