var mysql = require("mysql");
var inquirer = require("inquirer")

var items = [];

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "greatbay_db"
  });

inquirer.prompt (
    {
        type: "rawlist",
        name: "doWhat",
        message: "What would you like to do?",
        choices: ["Bid on an item", "sell item"]
    }).then(function(user) {
        if (user.doWhat === "Bid on an item") {
            getItems();
            beginBid();
        }
    });


    function getItems() {
        connection.query("SELECT * FROM items", function (err, response) {
            for (var i = 0; i < response.length; i++) {
                items.push(response[i]);
            }
        })
    }
    


    function beginBid() {
        inquirer.prompt([
            {
                type: "rawlist",
                name: "whichItem",
                message: "Which item would you like to bid on?",
                choices: items,
                default: iNo
            }
        ]).then(function(user){
            var thisItem = user.whichItem.items[iNo];
        })
    }

    function addNewBid() {
        connection.query(
            "UPDATE items SET ? WHERE ?", function(err, response) {
                if (err) throw err;
                [
                    {
                        price: newBid,
                    },
                    {
                        item: thisItem
                    }
                ],
                    function(err, response) {
                        deleteProduct();
                    }
                ]
                connection.end();
            }
        )
    }