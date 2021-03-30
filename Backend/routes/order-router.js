//Requerimos de express el método router
const router = require("express").Router();
const orderController = require("../controllers/order-controller");

//POST - Create a new Order in the DB
router.post('/', async (req, res) => {
    console.log("Esto es el req",req)
    try{
        const order = await orderController.rentMovie(req.body.userId,req.body.filmId,req.body.film);
        console.log("soy el userId",req.body.userId,req.body.filmId,req.body.film)
        const status = 'success';
        res.json({status,order});
    } catch( error ){
        return res.status(404).json(
            console.log(error.message)
            /*{
            message: "Movie or User not found"
        }*/);
    }
});

router.get('/', async (req, res)=>{
    try{
        res.json(await orderController.showAllOrders())

    }catch(error){
        return res.status(404).json({
            message: "Orders not found"
        });

    }

});

module.exports = router;