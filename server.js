const express = require('express');
const bodyParser = require('body-parser');
const peopleRoutes = require('./routes/people');
const mysqlConnection = require('./connection');

var app = express();
app.use(bodyParser.json());

app.use('/people', peopleRoutes);



app.listen(3000);
