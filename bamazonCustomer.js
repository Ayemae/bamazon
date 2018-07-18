var mysql = require("mysql");
var inquirer = require("inquirer");

function getItems() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;
        for (var i = 0; i < response.length; i++) {
            items.push(response[i]);
        }
    })
}