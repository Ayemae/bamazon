DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    price DECIMAL(3,2) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO items (name, price)
VALUES ("NES", 10);

INSERT INTO items (name, price)
VALUES ("bubblegum machine", 30);