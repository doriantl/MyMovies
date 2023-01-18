const bcrypt = require('bcrypt');
require('dotenv').config();

const database = require('../database');

const connection = database.connection

connection.connect()

//get all movies
module.exports.getallmovies = function (req, res) {
    connection.query('SELECT * FROM MyMovie.movies;', (err, rows, field)=>{
        if (err) throw err
        console.log(rows.id)
        res.json(rows)
    })
}

//get all movies
module.exports.getalluser = function (req, res) {
    connection.query('SELECT * FROM MyMovie.users;', (err, rows, field)=>{
        if (err) throw err
        console.log(rows.id)
        res.json(rows)
    })
}


module.exports.postforregister = async function (req, res){
    // Capture the input fields

    let mailadress = req.body.mailadress;
    let password = req.body.password;
    const hash = await bcrypt.hash(password,10)



    if (mailadress && hash) {

        connection.query('INSERT INTO MyMovie.users (password, mail) VALUE (?,?)', [hash, mailadress], function (error, results, fields) {

            if (error) throw error;

            if (results.length > 0) {
                console.log("User correctly logged in")


            } else {
                res.send('Invalid');
            }
            res.end();
        });
    } else {
        res.send('Invalid');
        res.end();
    }
}
