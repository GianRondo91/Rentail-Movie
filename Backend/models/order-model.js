//Requerimos todo lo necesario de mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const User = mongoose.model('User');

const orderSchema = new Schema({
    
    
    filmId: {
        type: String,
        ref: "Movie",
        require: true,
        //unique:true
    },
    
    userId: { 
        type: ObjectId, 
        ref: "User",
        required: true
    },
    movieData:{
        type:Object,
    },
    price:{
        type: Number,
        default: 4.99
    },
    
    order_date:{
        type: Date,
        default: new Date
    },
    return_date:{
        type: Date,
        default: new Date(+new Date()+4*24*60*60*1000)
    },

})

//Exportamos la clase Order
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;