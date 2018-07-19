DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(140) NOT NULL,
    department_name VARCHAR (140),
    price DECIMAL (5,2) NOT NULL,
    stock INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("How To Fly a Kite","Books", 10.00, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Sage's Quest","video games", 20.00, 100);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Nintendo Switch", "video games", 300.00, 10);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Lawn Chair", "furniture", 60.00, 10);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("construction paper pack", "arts and crafts", 5.00, 300);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Pet Plate", "pet care", 8.00, 100);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("giant chocolate bar", "food", 6.00, 80);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Javascript for Dummies", "book", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("lava lamp", "furniture", 12.00, 60);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("glue gun", "arts and crafts", 12.00, 30);