//Database
var db = require('../db');

module.exports = {
  messages: {
    get: function (callbackFromServer) {
      let queryString = 'SELECT * FROM messages';
      queryArgs = [];
      db.query(queryString, queryArgs, (err, results) => {
        callbackFromServer(err, results);
      });
    },
    post: function (message, callback) {
      let queryString = 'INSERT INTO messages (text, roomname, username) VALUES (\'' + 
      message.text + '\', \'' + 
      message.roomname + '\', ' + '(SELECT username FROM users WHERE username = \'' + 
      message.username + '\'));';

      queryArgs = [];
      db.query(queryString, queryArgs, (err) => {
        callback(err);
      });
    }
  },

  users: {
    get: function (callbackFromServer) {
      let queryString = 'SELECT * FROM users';
      let queryArgs = [];
      db.query(queryString, queryArgs, (err, results) => {
        callbackFromServer(err, results);
      });
    },
    post: function (message, callback) {
      let queryString = 'INSERT INTO users (username) VALUES (\'' + message.username + '\');';
      console.log(queryString);
      let queryArgs = [];
      db.query(queryString, queryArgs, (err) => {
        callback(err);
      });

    } 
  },

};

