
// This function genrates the template for the readme,
// inputs the user's data from the prompts,
// and calls the badgeMaker function to display the license badge.

function generateMarkdown(data) {
  
  return `
  
  # ${data.title}

  ${badgeMaker(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#install)
  - [Usage Information](#usage)
  - [Contributers](#contributers)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  <hr>
  
  ## Description <a name="description"></a>
  
  ${data.description}
  
  <hr>
  
  ## Installation Instructions <a name="install"></a>
  
  ${data.install}
  
  <hr>
  
  ## Usage <a name="usage"></a>
  
  ${data.usage}
  
  <hr>
  
  ## Contributers <a name="contributers"></a>
  
  ${data.contributer}
  
  <hr>
  
  ## Test Information <a name="test"></a>
  
  ${data.test}
  
  <hr>
  
  ## License <a name="license"></a>
  
  Please refer to the following license for guidelines, usage details, and information.
  
  License: ${data.license}
  
  <hr>
  
  ## Questions <a name="questions"></a>
  
  For any questions regarding this material, contact me at the following:
  
  Email: ${data.email}
  
  Github: [https://github.com/${data.github}](https://github.com/${data.github})
  
  `;
}


// This function generates the badge based on user selection from prompt.

function badgeMaker(license) {
  let badgeImg;
  let badgeURL;

switch (license) {
  case "None":
    badgeImg = "";
    badgeURL = "";
    break;
  case "Apache 2.0":
    badgeImg = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    badgeURL = "https://opensource.org/licenses/Apache-2.0";
    break;
  case "GPLv3":
    badgeImg = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    badgeURL = "https://www.gnu.org/licenses/gpl-3.0";
    break;
  case "MIT":
    badgeImg = "https://img.shields.io/badge/License-MIT-yellow.svg";
    badgeURL = "https://opensource.org/licenses/MIT";
    break;
   }
   return `[![License](${badgeImg})](${badgeURL})`;
}

module.exports = generateMarkdown;
