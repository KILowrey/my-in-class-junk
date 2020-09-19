DROP DATABASE IF EXISTS great-bay_db;
CREATE DATABASE great-bay_db;
USE great-bay_db;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NULL,
  what VARCHAR(100),
  bid INT NULL,
  sold VARCHAR(3),
  PRIMARY KEY (id)
);

INSERT INTO listings (item, highbid)
VALUES ("", );