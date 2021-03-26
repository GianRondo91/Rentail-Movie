//Requerimos de express el método Router
const router = require('express').Router();


//Importamos los archivos router de cada metodo
const adminRouter = require('./routes/admin-router');
const movieRouter = require('./routes/movie-router');
const userRouter = require("./routes/user-router");
const orderRouter = require("./routes/order-router");


router.use('/admin', adminRouter)
router.use('/movies',movieRouter);
router.use("/users",userRouter);
router.use("/orders", orderRouter);



module.exports = router;