//Requerimos todo lo necesario de la librería mongoose para crear el modelo de usuario

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    birthday: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    postal: {
        type: String
    },
    image: {
        type: String
    },
    payment: {
        nameUser: {
            type: String
        },
        numberCard: {
            type: Number
        },
        date: {
            type: Date
        },
        codeSecurity: {
            type: Number
        }
    },
    creationDate: {
        type: Date,
        default: new Date
    }
});

const toJSONConfig = {
    transform: (doc, ret, opt) => {
        delete ret['password']
        return ret
    }
};


userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model("User", userSchema);
module.exports = User;