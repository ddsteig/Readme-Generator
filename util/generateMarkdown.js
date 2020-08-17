function generateMarkdown(data) {
  return `

  # ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo})

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
  
  ## Test <a name="test"></a>
  
  ${data.test}
  
  <hr>
  
  ## License <a name="license"></a>
  
  Please refer to the following license for guidelines, usage details, and information.
  
  ${data.license}
  
  <hr>
  
  ## Questions <a name="questions"></a>
  
  For any questions regarding this material, contact me at the following:
  
  Email: ${data.email}
  
  Github: ${data.github}
  
  `;
}

module.exports = generateMarkdown;
