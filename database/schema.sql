DROP DATABASE IF EXISTS user_data;
CREATE DATABASE user_data;
USE user_data;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(500) NOT NULL,
  userPassword VARCHAR(1000) NOT NULL
);

CREATE TABLE trips (
  id int AUTO_INCREMENT PRIMARY KEY,
  destination VARCHAR(100) NOT NULL,
  travelDate VARCHAR(50) NOT NULL,
  userId int NOT NULL
);

ALTER TABLE trips
ADD FOREIGN KEY (userId) REFERENCES users(id);