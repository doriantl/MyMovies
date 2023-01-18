const express = require('express');
const cors = require('cors');
const controller = require('../Controllers/controller');
const app = express();
require('dotenv').config();


module.exports = function (app) {

    const controller = require('../Controllers/controller');

    app.route('/movies')
        .get(controller.getallmovies)

    app.route('/user')
        .get(controller.getalluser)

    app.route('/auth/register')
        .post(controller.postforregister)
}
