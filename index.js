// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the project installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any usage limitations?'
    },
    {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'What are the project contributing guidelines?'
    },
    {
        // pulled list of licences from https://opensource.org/licenses/category
        type: 'list',
        name: 'license',
        message: 'What is your project license?',
        choices: ['Apache 2.0', 'MIT', 'Mozilla Public', 'European Union Public', 'none']
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(inputData => {
            return inputData;
        })
};

// Function call to initialize app
init().then(inputData => {
    return generateMarkdown(inputData);
})
    .then(readmeMD => {
        return writeFile(readmeMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })