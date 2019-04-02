var mysql = require("mysql");
var inquirer = require("inquirer");
var createBid = require("./createBid");


function pickOption() {
    inquirer
    .prompt([{
        type: "list",
        message: "What would you like to do?",
        choices: ["List New Item", "Bid on Item"],
        name: "options"
    }])

    .then(function (response) {
        if (response.options === "List New Item") {
            listItem();
        }
    });}

function listItem() {
    inquirer
        .prompt([{
            type: "input",
            message: "What item would you like to list?",
            name: "itemName"
        }])

        .then(function (response) {
            if (response.itemName) {
                itemCat();
            }
        });

}

function itemCat() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is your item's category?",
            name: "catName"
        }])

        .then(function (response) {
            if (response.catName) {
                startPrice();
            }
        });

}

function startPrice() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is your item's starting price?",
            name: "startingPrice"
        }])

        .then(function (response) {
            if (response.startingPrice) {
                console.log("Item added!");
                pickOption();
            }
        });
}

pickOption();