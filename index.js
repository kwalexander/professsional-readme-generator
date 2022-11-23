// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'list',
        name: 'license',
        message: 'What is your project license?',
        choices: ['MIT', 'none']
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is your email address?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
