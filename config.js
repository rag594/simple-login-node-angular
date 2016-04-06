var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit:100,
  host:'localhost',
  
  user:'root',
  password:'1234',
  database:'sense8'
});

module .exports = {
  pool:pool
};