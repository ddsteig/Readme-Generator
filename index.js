var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your readme?",
            name: "title"
        }
    ])
    .then (function(response){
        console.log(response.title)
    })