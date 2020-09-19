DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;

CREATE TABLE Top5000 (
  id INT NOT NULL,
  artist VARCHAR(100),
  title VARCHAR(100),
  raw_year INT NULL,
  raw_total DECIMAL(10,3),
  raw_usa DECIMAL(10,3),
  raw_uk DECIMAL(10,3),
  raw_eur DECIMAL(10,3),
  raw_row DECIMAL(10,3),
  PRIMARY KEY (id)
);
