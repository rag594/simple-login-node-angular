var mysql = require('mysql');
var conf = require('../config');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
//var conn = mysql.createConnection(conf.mysql);
var user = {

  getUser(username, cb) {
  conf.pool.getConnection(function (err, conn) {

    if(err) {
      res.json({msg:"error in connecting to database"});
    } else {
      var query = 'Select * from userDetails where username = ?';

      conn.query(query, [username], function (err, rows) {
        conn.release();
        if(err) {
          console.log("ERR",err);
          cb(err,null);
        } else if(rows[0]) {
          cb(null, rows[0]);
        } else {
          cb('user not found',null);
        }
      });
    }
  });
},

  verify(param,cb){
    this.getUser(param.username, function (err, users) {
      if(err) {
        cb(err,null);
      } else if(users) {
        if(bcrypt.compareSync(param.password,users.password)) {
          cb(null,users);
        } else {
          cb("wrong password", null);
        }
      } else {
        cb("user not found");
      }
    });
  }
};

module.exports = user;