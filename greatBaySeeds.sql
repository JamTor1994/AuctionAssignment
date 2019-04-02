DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
  startingBid DECIMAL(10,2) NOT NULL,
  currentBid DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO auctions (item, category, startingBid)
VALUES ("70s Tuxedo", "Clothing", 100);

INSERT INTO auctions (item, category, startingBid)
VALUES ("80s Tuxedo", "Clothing", 80);

INSERT INTO auctions (item, category, startingBid)
VALUES ("Dirt Bike", "Recreational Vehicle", 450);

