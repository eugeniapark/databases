//Controller handles gets/posts -- 
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {  //gets from db to send back to client
      models.messages.get( (err, results) => {
        if (err) {
          res.status(404).send("Messages not found");
        } else {
          var dataObj = {
            results: results
          };
          res.status(200).send(dataObj);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req.body, (err) => {
        if (err) {
          res.status(404).send("Failed to post");
        } else {
          res.status(201).send("Messages posted");
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {  //gets from db to send back to client
      models.users.get( (err, results) => {
        if (err) {
          res.status(404).send("User not found");
        } else {
          res.status(200).send(results);
        }
      });
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body, (err) => {
        if (err) {
          res.status(404).send("Failed to post");
        } else {
          res.status(201).send("User posted");
        }
      });
    }
  },
};