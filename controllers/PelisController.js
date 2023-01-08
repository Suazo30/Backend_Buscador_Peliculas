

const Peli = require('../models/pelis');

const PelisController = {};

PelisController.getAllPelis = async (req, res) => {

    try {
        await Peli.find({})
            .then(Pelis => {

                res.send(Pelis)
            })
    } catch (error) {
        console.log(error);
    }
}

PelisController.newPelis = async (req, res) => {

    let name = req.body.name;
    let actors = req.body.actors;
    let category = req.body.category;
    let year = req.body.year;
    let toprated = req.body.toprated;

    await Peli.create({
        name: name,
        actors: actors,
        year: year,
        category: category,
        toprated: toprated,

    }).then(car => {
        res.send({ "Message": `La pelicula ${Peli.name} se ha añadido con éxito` })
    }).catch(error => { console.log(error) });

};

PelisController.updatePelis = async (req, res) => {

    let id = req.body.id;
    let newName = req.body.name;
    let newactors = req.body.actors;
    let newyear = req.body.year;
    let newtoprated = req.body.toprated;

    try {
        await Peli.findByIdAndUpdate(id, {
            $set: {
                name: newName,
                actors: newactors,
                year: newyear,
                category: newcategory,
                toprated: newtoprated,
            }
        }).setOptions({ returnDocument: 'after' })
            .then(pelisModified => {
                res.send(pelisModified)
            })
    } catch (error) {
        console.log("Error updating pelis name", error);
    }
}

PelisController.deletePelis = async (req, res) => {
    let _id = req.body._id;

    try {
        await Peli.findByIdAndDelete(_id)
            .then(peli => {
                res.send({ "Message": `El pelis ${peli.name} se ha eliminado con éxito` })
            })
    } catch (error) {
        console.log("Error deleting pelis", error);

    }
};

PelisController.toprated = async (req, res) => {

    let toprated = req.body.toprated;

    try {
        await Peli.find({toprated: toprated})
            .then(Pelis => {

                res.send(Pelis)
            })
    } catch (error) {
        console.log(error);
    }
}

PelisController.id = async (req, res) => {

    let id = req.body.id;

    try {
        await Peli.find({id: id})
            .then(Pelis => {

                res.send(Pelis)
            })
    } catch (error) {
        console.log(error);
    }
}

PelisController.name = async (req, res) => {

    let name = req.body.name;

    try {
        await Peli.find({name: name})
            .then(Pelis => {

                res.send(Pelis)
            })
    } catch (error) {
        console.log(error);
    }
}

PelisController.category = async (req, res) => {

    let category = req.body.category;

    try {
        await Peli.find({category: category})
            .then(Pelis => {

                res.send(Pelis)
            })
    } catch (error) {
        console.log(error);
    }
}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PelisController;