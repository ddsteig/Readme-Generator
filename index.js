var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then(function (response) {
    let readme = `# ${response.title}

      <hr>

      '## Description

      ${response.description}

      <hr>

      ## Table of Contents

      <hr>

      ## Installaion Instructions

      ${response.install}

      <hr>

      ## Usage

      ${response.useage}

      <hr>

      ## Contributers

      ${response.contributer}

      <hr>

      ## Tests

      ${response.test}

      ## Questions

      <p>For any questions, contact me at the following: </p>

      Email: ${response.email}

      Github: ${response.github}

      `;

    fs.writeFile("README.md", readme, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Readme Generated!");
      }
    });
  });
