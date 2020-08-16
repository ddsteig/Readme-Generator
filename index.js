const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your readme?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of your readme.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions.",
      name: "install",
    },
    {
      type: "input",
      message: "Enter useage information.",
      name: "usage",
    },
    {
      type: "input",
      message: "Select a license.",
      name: "select",
    },
    {
      type: "input",
      message: "Enter contributer, or resource information.",
      name: "contributer",
    },
    {
      type: "input",
      message: "List any tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email",
    },
    {
      type: "input",
      message: "Enter your GitHub user name.",
      name: "github",
    },
  ]);
}

function generateMarkdown(data) {
  return `# ${data.title}
  
    ## Description
  
    ${data.description}
  
    <hr>
  
    ## Table of Contents
  
    <hr>
  
    ## Installaion Instructions
  
    ${data.install}
  
    <hr>
  
    ## Usage
  
    ${data.usage}
  
    <hr>
  
    ## Contributers
  
    ${data.contributer}
  
    <hr>
  
    ## Tests
  
    ${data.test}
  
    ## Questions
  
    <p>For any questions, contact me at the following: </p>
  
    Email: ${data.email}
  
    Github: ${data.github}
    
  `;
}

promptUser()
  .then(function (data) {
    const readme = generateMarkdown(data);

    return writeFileAsync("README.md", readme);
  })
  .then(function () {
    console.log("Readme Generated!");
  })
  .catch(function (err) {
    console.log(err);
  });
