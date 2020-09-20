-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS shield_db;

-- Created the DB "shield_db" (only works on local connections)
CREATE DATABASE shield_db;

-- Use the DB shield_db for all the rest of the script
USE shield_db;

-- Created the table "agents"
CREATE TABLE agents (
  id BIGINT(10) AUTO_INCREMENT NOT NULL,
  name VARCHAR(45) NOT NULL,
  coolness INT NOT NULL,
  role VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records into the table
INSERT INTO agents (name, coolness, role)
VALUES ("Phil Coulson", 10, "leader"),
("Melinda May", 12, "fighter"),
('Daisy "Quake" Johnson', 9, "superhero"),
("Fitz", 8, "scientist"),
("Jemma Simmons", 7, "scientist"),
("Mack", 9, "leader"),
("Yo-Yo", 8, "superhero"),
("Daniel Sousa", 8, "fighter");