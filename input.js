var inquirer = require("inquirer");
// var createBid = require("createBid.js");
// var makeItem = require("makeItem.js");
var mysql = require("mysql");

var users= [];

function login() {
    console.log("----------Username and Password Creation-------------");
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter a username:\n",
            name: "username",
            validate: function(input) {
                var done = this.async();
                setTimeout(function() { 
                    for(var i = 0; i < users.length; i++) {
                        if(input === users[i]) {
                            done("Sorry, that username already exists!\n");
                            return;
                        } 
                    } done(true);
                }, 1000);
            }
        },
        {
            type: "input",
            message: "Please enter a password:\n",
            name: "password"
        }
    ]).then(function(answer) {
        users.push(answer.username);
        users.push(answer.password);
        console.log("Username: " + answer.username + "\n");
        console.log("Password: " + answer.password + "\n");
    });
}
login();