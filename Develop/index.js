// TODO: Include packages needed for this application
// Those lines import the `fs` (File System) module for reading and writing files and `inquirer` module for prompting user input.
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// This array holds a series of questions that will be asked to the user. Questions include project title, description, installation, instructions, usage, contribution guidelines, tests, licence choice, Github username and email.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your project?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
// This function takes a filename and data, then uses the `writeFileSync` method from the `fs` module to write the data to the specified file. It also logs a success message to the console.
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} successfully generated!`);
}

// TODO: Create a function to initialize app
// The `init` function uses `inquirer.prompt` to ask the user the questions defined in the `questions` array.
// Once the user provides responses, the `then` callback is executed, generating the README content using the `generateREADME` function and then writing it to a file using the `writeToFile` function.
function init() {
    inquirer.prompt(questions).then((userResponses) => {
        const readmeContent = generateREADME(userResponses);
        writeToFile('README.md', readmeContent);
    })
}

// The `generateREADME` function takes the user responses and constructs the content of the README file using a template literal.
function generateREADME(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under the [${data.license} License](https://opensource.org/licenses/${data.license}).
  
  ## Questions
  For additional questions, contact [${data.username}](https://github.com/${data.username}) or reach out via email at ${data.email}.
  `;
}

// Function call to initialize app
init();
