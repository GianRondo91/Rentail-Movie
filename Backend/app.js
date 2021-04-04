
const express = require('express')
const router = require('./router');
const db = require('./db');
const cors = require('cors')
const app = express();
const port = 3002;
require('crypto').randomBytes(48).toString('hex')
//Midelwares
app.use(cors())
app.use(express.json());
app.use(router);


db.then(() => {
    app.listen(port, () => {
    })
}).catch(console.log);