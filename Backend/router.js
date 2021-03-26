//Requerimos de express el método Router
const router = require('express').Router();

//Importamos los archivos router de cada metodo
const movieRouter = require('./routes/movie-router');
const userRouter = require("./routes/user-router");
const orderRouter = require("./routes/order-router");


router.use('/movies',movieRouter);
router.use("/users",userRouter);
router.use("/orders", orderRouter);


module.exports = router;