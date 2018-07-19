var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

var namesArr = []

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    getCatalogue();
});

function getCatalogue() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id, res[i].product_name + " for $" + res[i].price);
        }
        purchaseHelperStart();
    });
}

function purchaseHelperStart() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "buyWhat",
                type: "list",
                choices: function () {
                    var namesArr = [];
                    for (var i = 0; i < res.length; i++) {
                        namesArr.push(`${i}) ${res[i].product_name}`);
                    }
                    return namesArr;
                },
                message: "What would you like to buy?"
            }
        ]).then(function (iRes) {
            var indChoice = iRes.buyWhat;
            console.log(indChoice);
            console.log(iRes)
            if (res[indChoice - 1] && res[indChoice - 1].stock > 0) {
                updateStock();
            }
            else{
                console.log(res)
                console.log("Sorry, we don't have enough of that item.")
            }
        })
    })
}

function updateStock() {
    var query = connection.query(
        "UPDATE products SET ? WHERE ?", [
            { stock: (res[indChoice - 1].stock - 1) },
            { item_id: indChoice }],
        function (err, res) {
            console.log("You just bought 1 " + res[indChoice - 1].product_name + "!")
            console.log(res.affectedRows + " stock updated to " + res[indChoice - 1].stock);
        }
    );
}
