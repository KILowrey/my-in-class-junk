DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  artist VARCHAR(100) NULL,
  genre VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Friday Night Gurus", "Studio Killers", "Electro Pop"), ("Electra Heart", "MARINA", "Pop"), ("Ghost", "Mystery Skulls", "Electro Pop"), ("State of Dreaming", "MARINA", "Pop"), ("Dirty Car", "Studio Killers", "Electro Pop");

