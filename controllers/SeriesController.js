

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

    let name = req.body.name;
    let actors = req.body.actors;
    let year = req.body.year;
    let toprated = req.body.toprated;
    let episodioSemanal = req.body.episodioSemanal;
    let verEnCineTeatro = req.body.verEnCineTeatro;

    try {

        let user = await Series.create({
            name: name,
            actors: actors,
            year: year,
            toprated: toprated,
            episodioSemanal: episodioSemanal,
            verEnCineTeatro: verEnCineTeatro
        })

        if (user) {

            res.send({ "Message": `Su serie se ha alquilado con éxito` });

        } else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSeries = async (req, res) => {

    let _id = req.body._id;
    let newOverview = req.body.overview;
    // let newName = req.body.name;
    // let newPoster_path = req.body.poster_path;
    

    try {

        let result = await Series.findByIdAndUpdate(_id, {
            $set: {
                _id: _id,
                overview: newOverview,
                // name: newName,
                // poster_path: newPoster_path,
            }

        }).setOptions({ returnDocument: 'after' })

        if (result?.name) {
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre de la serie", error);
    }
};

SeriesController.deleteSeries = async (req, res) => {
    let _id = req.body._id;

    try {
        let result = await Series.findByIdAndDelete(_id);

        res.send({ "Message": `La serie ${result.name} se ha eliminado con éxito` })

    } catch (error) {
        console.log("Error al eliminar la serie", error);

    }
};

SeriesController.postSeriesByEpisodioSemanal = async (req, res) => {


    const episodioSemanal = req.body.episodioSemanal
    try {

        let result = await Series.find({ episodioSemanal: episodioSemanal })

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningun episodio." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.toprated = async (req, res) => {


    const toprated = req.body.toprated
    try {

        let result = await Series.find({ toprated: toprated })

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie con esta puntuacion." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.id = async (req, res) => {


    const _id = req.body._id
    try {

        let result = await Series.find({ _id: _id })

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


    const name = req.params.name
    try {

        let result = await Series.find({ "name": {"$regex":name, "$options":"i"}})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": `Lo sentimos, no hemos encontrado ninguna serie con este nombre ${name}.` })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.teatrosCines = async (req, res) => {


    const teatrosCines = req.body.teatrosCines
    try {

        let result = await Series.find({ teatrosCines: teatrosCines })

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna serie que se este transmitiendo en teatros o cines." })
        }

    } catch (error) {
        console.log(error);
    }
}


//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;