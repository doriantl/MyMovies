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
    let username = req.body.username;
    let uuidfromrequest = req.body.uuid;
    const hash = await bcrypt.hash(password,10)


    let userid

    if (mailadress && hash && username && iconeurl) {

        connection.query('INSERT INTO Pokedex.Users (username, profil_icon_url, users_pwd, mailadress) VALUE (?,?,?,?)', [username, iconeurl, hash, mailadress], function (error, results, fields) {

            if (error) throw error;

            if (results.length > 0) {
                console.log("User correctly logged in")
                userid = results[0]["users_id"]

                connection.query(`UPDATE Users SET uuid = ? WHERE (users_id = ? )`, [uuidfromrequest, userid], function (error, result, fields) {
                    if (error) {
                        res.send("Error")
                    }
                })
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
