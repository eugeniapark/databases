//Controller handles gets/posts -- 

var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {  //gets from db to send back to client
      models.messages.get( (err, results) => {

      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  },
};

