
const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'newdb',
    multipleStatements : true
});

mysqlConnection.connect((err) => {
    if(!err)
    {
        console.log('Connected');
    }
    else
    {
        console.log('Connection Failed');
    }
})

module.exports = mysqlConnection;