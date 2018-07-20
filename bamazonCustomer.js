var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "root",
    database: "bamazon_db"
});


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
            },
            {
                name: "howMany",
                type: "input",
                message: "How many would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log(" That's not a valid order number. Try again.")
                    return false;
                }
            }
        ]).then(function (iRes) {
            connection.query("SELECT * FROM products", function (err, res) {
                var indChoice = iRes.buyWhat.charAt(0);
                var dbChoice = parseInt(indChoice) + 1;
                var orderNum = parseInt(iRes.howMany);

                if (res[indChoice]) {
                    if (res[indChoice].stock >= orderNum) {
                        if (err) throw err;
                        var newStock = (res[indChoice].stock - orderNum);
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock: parseInt(newStock)
                                },
                                {
                                    item_id: parseInt(dbChoice)
                                }
                            ],
                            function (err, res1) {
                                if (err) throw err;
                                console.log("You just bought " + orderNum + " " + res[indChoice].product_name + "(s)! " + res[indChoice].product_name + "'s stock has been updated." +
                                "\n"+res[indChoice].product_name + "'s stock should now be " + newStock)
                                endTransactions();
                            }
                        );
                    } else {
                        console.log("Sorry, we don't have enough of that item to complete your order.")
                        endTransactions()
                    }
                }
                else {
                    console.log("Sorry, we don't have that.")
                    endTransactions()
                }
            })
        })
    })
}


function endTransactions() {
    inquirer.prompt({
        name: "new",
        type: "confirm",
        message: "Do you want to buy something else?"
    }).then(function (answer) {
        if (answer.new === true) {
            purchaseHelperStart();
        }
        else {
            connection.end();
        }
    })
}