

const Peli = require('../models/pelis');

const PelisController = {};

PelisController.getAllPelis = async (req, res) => {

    try {
        let result = await Peli.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna pelicula." })
        }

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

    try {
        let result = await Peli.create({
            name: name,
            actors: actors,
            category: category,
            year: year,
            toprated: toprated
        })

        if (result?.name) {
            res.send({ "message": `La pelicula ${result.name} se ha creado con exito` })
        }

    } catch (error) {
        console.log(error);
    }
};

PelisController.updatePelis = async (req, res) => {

    let _id = req.body._id;
    let newName = req.body.name;

    try {

        let result = await Peli.findByIdAndUpdate(_id, {
            $set: {
                _id: _id,
                name: newName,

            }
        }).setOptions({ returnDocument: 'after' })

        if (result?.name) {
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre de la película", error);
    }
};

PelisController.deletePelis = async (req, res) => {
    let _id = req.body._id;

    try {

        let result = await Peli.findByIdAndDelete(_id);

        res.send({ "Message": `La pelicula ${result.name} se ha eliminado con éxito` })

    } catch (error) {
        console.log("Error al eliminar la película", error);

    }
};

PelisController.toprated = async (req, res) => {


    const toprated = req.body.toprated
    try {

        let result = await Peli.find({ toprated: toprated })

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna pelicula con esa puntuacion." })
        }

    } catch (error) {
        console.log(error);
    }
}

PelisController.id = async (req, res) => {

    let _id = req.body._id;

    try {
        const peliByID = await Peli.find({ _id: _id })
        if (peliByID.length == 0) {
            res.send(404);
            res.send({ "message": "No se encontro la pelicula con ese ID" })
        } else {
            res.send(peliByID)
        }

    } catch (error) {
        console.log(error);
    }
}

PelisController.name = async (req, res) => {

    let name = req.body.name;

    try {
        const foundMovies = await Peli.find({
            name: name
        })
        if (foundMovies.length === 0) {
            res.send({ "message": `Lo sentimos, no se ha encontrado ninguna pelicula con este nombre ${name}` });
        } else {
            res.send(foundMovies)
        }
    } catch (error) {
        console.log(error)
    }
};

PelisController.category = async (req, res) => {

    let category = req.body.category;

    try {
        const peliByCategory = await Peli.find({
            category: category
        })
        if (peliByCategory.length === 0) {
            res.send({ "message": `Lo sentimos, no se ha encontrado ninguna pelicula con esta categoria ${category}` });
        } else {
            res.send(peliByCategory)
        }
    } catch (error) {
        console.log(error)
    }
};
//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PelisController;