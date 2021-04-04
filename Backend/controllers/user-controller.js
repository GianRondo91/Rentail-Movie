//Requerimos el modelo de user para crear la clase controladora del user
const User = require("../models/user-model");

//Importacion de librerías para hass de password
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';

class UserController {
    constructor() {}

    //Mostrar todos los user
    async showAllUsers(users) {
        return User.find(users);
    };

    //Crear users
    async createNewUser(user) {
        user.password = await bcrypt.hash(user.password, 5)
        return User.create(user);
    };

    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Email does not exist')
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        return { token, user }
    };

    //Google Login
    async googleLogin(googleInfo) {
        let user = await User.findOne({ email: googleInfo.email });

        if (!user) {
            //creo el usuario
            user = {
                name: googleInfo.givenName,
                surname: googleInfo.familyName,
                email: googleInfo.email,
                image: googleInfo.imageUrl,
                password: await bcrypt.hash(googleInfo.googleId, 5)
            };
            await User.create(user);
        } else if (!await bcrypt.compare(googleInfo.googleId, user.password)) {
            throw new Error('Hay un usuario ya registrado con el email: ' + googleInfo.email);
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }
        const token = jwt.sign(payload, secret);
        return { token, user }
    };

    //Mostrar un user por Id
    async findById(id) {
        return User.findById(id);
    };

    //Actualizar user por Id
    async updateUser(id, user) {
        return User.findByIdAndUpdate(id, user, { new: true });
    };

    //Eliminar user por Id
    async destroy(id) {
        return User.findByIdAndRemove(id);
    };

};


const userController = new UserController();
module.exports = userController;