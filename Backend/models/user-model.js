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
    username: {
        type:String,
        //required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    },
    phone: {
        type: String,
        default:'Se le pedira al cliente , mas tarde'
    },
    birthday: {
        type:String,
        default:'No es relevante'
    },
    address: {
        type: String
    },
    payment: {
        type: String,
        default:'Tarjeta de credito'
    },
   // role: {
      //  type: String,
     //   default: 'client',
     //   enum: ["client", "admin"]
     //  },
    creationDate: {
        type: Date,
        default: new Date
    }
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
};


userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model("User", userSchema);
module.exports = User;