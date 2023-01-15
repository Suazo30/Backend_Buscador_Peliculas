

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {

        let result = await User.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }

    } catch (error) {
        console.log(error);
    }
}

UsersController.getUserById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.params._id;
    let user = req.user.usuario[0];

    //Estos datos de user son lo que el middleware auth ha decodificado del token ;)
    if (_id !== user._id) {

        res.send({ "Msg": "Acceso no autorizado" });
    } else {

        res.send({

            "id": user._id,
            "name": user.name,
            "surname": user.surname,
            "email": user.email,
            "phone": user.phone,
        });
    }
}

UsersController.getUsersByName = async (req, res) => {

    let name = req.body.name;

    try {

        await User.find({
            name: name
        })
            .then(foundUsers => {
                res.send(foundUsers)
            })

    } catch (error) {
        console.log(error);
    }
}

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            dni: req.body.dni
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }

};

UsersController.updateUser = async (req, res) => {

    let newName = req.body.name;
    let newSurname = req.body.surname;

    try {
        let updated = await User.findOneAndUpdate(
            //Query de búsqueda....
            { email: email },
            //Campos a cambiar
            {
                name: newName,
                surname: newSurname
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`Usuario actualizado con éxito`)
        }
    } catch (error) {
        console.log("Error updating user data", error);
    }
}

UsersController.deleteUser = async (req, res) => {
    let dni = req.body.dni;

    try {
        let deleted = await User.findOneAndDelete({
            dni: dni
        })

        if (deleted) {
            res.send({ "Message": `El usuario ${erased.name} ${erased.surname} se ha eliminado con éxito` })
        }
    } catch (error) {
        console.log("Error deleting user", error);

    }
};

UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await User.find({
            email: req.body.email
           
        })

        
        if (userFound) {
            
            if (userFound[0].email === undefined) {
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send("Usuario o password incorrecto");
            } else {
               
                //Hemos encontrado al usuario, vamos a ver si el pass es correcto
               
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    
                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });

                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                } else {
              
                    res.send("Usuario o password incorrecto");
                }
            }

        }


    } catch (error) {
        res.send("Email o password incorrectos");
    }
}
//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;