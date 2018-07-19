var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "root",
    database: "bamazon_db"
  });


// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     getItems();
//   });

// function getItems() {
//     connection.query("SELECT item_id,product_name,price FROM products", function (err, res) {
//         if (err) throw err;

//         inquirer.prompt([
//             {
//                 name: "buyWhat",
//                 type: "rawlist",
//                 choices: function() {
//                     var itemsArr = [];
//                     for (var i = 0; i < res.length; i++) {
//                         itemsArr.push(res[i].product_name);
//                     }
//                     return itemsArr;
//                 },
//                 message: "What would you like to buy?"
//             },
//             {}
//         ])
//     })
// }
