const express = require('express');
const cors = require('cors');



const morgan = require('morgan');

const app = express();

// importa dbconfig
const database = require('./config/db.config');

// TODO conexão Banco de dados


const index = require('./routes/index');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api.json' }));
app.use(cors());
app.use(morgan('dev'));
app.use(index);
//TODO incluir a rota 'user.routes.js'

module.exports = app;