const inquirer = require("inquirer");

const fs = require("fs");

  const questions = [
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project?"
    },

    {
      type: "input",
      name: "description",
      message: "Provide a short description explaining the what, why, and how of your project."
    },

    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your  project?"
    },
        
    {
      type: "input",
      name: "usage",
      message: "Please provide information about your project's usage."
    },

    {
      type: "input",
      name: "guidelines",
      message: "Please provide contribution guidelines."
    },

    {
      type: "input",
      name: "instructions",
      message: "Please provide test instructions."
    },
    
    {
      type: "input",
      name: "license",
      message: "License?"
    },
    
    {
      type: "input",
      name: "github",
      message: "Enter your github username"
    },
    
    {
      type: "input",
      name: "email",
      message: "Enter your email account"
    },

  ];

function generateREADME(data) {
  return `
# ${data.Title}
    
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage Information](#usage)
4. [Guidelines](#guidelines)
5. [Instructions](#instructions)
6. [License](#license)
7. [Questions](#questions)
## Project Description
* ${data.description}
## Installation Instructions
* ${data.installation}
## Usage Information
* ${data.information}
## Contributor Guidelines
* ${data.guidelines}
## Test Instructions
* ${data.instructions}
## License
* This application is covered under: ${data.license}
## Questions
* You can find my github profile here: [${data.github}](http://github.com/${data.github})
* If you have any additional questions, you can reach me at ${data.email}`;
  
}

function writeToFile(filename, data) {

  fs.writeFile('./bridgette/'+filename, data, (err) =>
    err? console.log(err) : console.log("Success! Your README.md has been created!")
  );

}


  function init () {

    inquirer.prompt(questions)
    .then(function (data) {
      writeToFile("Bridgette'sREADME.md", generateREADME(data));
    })

  }

  init();
