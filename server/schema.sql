CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username          VARCHAR(150) NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE messages (
  id                INT unsigned NOT NULL AUTO_INCREMENT,
  text              VARCHAR(150) NOT NULL,
  roomname          VARCHAR(150) NOT NULL,
  username          VARCHAR(150) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES users(username)
);
/* Create other tables and define schemas for them here! */

INSERT INTO users (username) VALUES
  ('Bob'),
  ('Jane');

INSERT INTO messages (text, roomname, username) VALUES
  ('Yooooo', 'bobs house', (SELECT username FROM users WHERE username = 'Bob')),
  ('Hello world', 'world', (SELECT username FROM users WHERE username = 'Jane'));


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

