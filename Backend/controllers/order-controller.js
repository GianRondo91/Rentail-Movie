//Requerimos los modelos de order, user y film
const Order = require("../models/order-model");
const User = require("../models/user-model");
const Movie = require("../models/movie-model");

//Creamos la clase alquiler

class Rent {
    constructor(){

    }

    //Create a new order
    async rentMovie (userId, film){
        const userEntity = await User.findById(userId)

        
        const movieDataEntity = film;
        
        if(!userEntity ||  /* !movieEntity || */ !movieDataEntity){
            throw new Error("Movie or user not found")
        }
        return await Order.create({
             userId: userId,
            poster_path:film,
            payment:true,
            

        });
    };
    // Get all orders
    async showAllOrders(){
        return Order.find();

    };

};

const orderController = new Rent();
module.exports = orderController;