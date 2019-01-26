CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id                INT unsigned NOT NULL AUTO_INCREMENT,
  username          VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id                INT unsigned NOT NULL AUTO_INCREMENT,
  text              VARCHAR(150) NOT NULL,
  roomname          VARCHAR(150) NOT NULL,
  roomId            INT unsigned NOT NULL,
  userId            INT unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

