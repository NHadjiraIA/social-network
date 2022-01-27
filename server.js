const express = require("express");
require('dotenv').config({path: './config/.env'});
require('./config/db');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.routes')
const app = express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// router
app.use('/api/user', userRoutes)
//server
app.listen(process.env.PORT, ()=>{
    console.log(`listenling on port ${process.env.PORT}`)
})