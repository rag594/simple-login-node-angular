var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit:100,
  host:'localhost',
  port:8889,
  user:'root',
  password:'root',
  database:'sense8'
});

module .exports = {
  pool:pool
};