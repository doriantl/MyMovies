const mysql = require('mysql2');

module.exports.connection = mysql.createConnection({
    host     :process.env.HOST,
    user     :process.env.USER,
    password :process.env.PASSWORD,
    database :process.env.DATABASE
})

const bcrypt = require('bcrypt');
require('dotenv').config();

const database = require('./database');

const connection = database.connection

connection.connect()