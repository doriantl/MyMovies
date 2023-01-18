const express = require('express');
const app =express()
const cors = require('cors');
bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./Routes/routes')
routes(app);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});