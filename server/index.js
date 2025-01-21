const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

//setting up api calls we can use this in our server setup for the time catcher applications
app.use('/', router)

const port = 4000
const server = app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`);
});