// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Title is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Description is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the project installation instructions?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Instructions are required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any usage limitations?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Usage info is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'What are the project contributing guidelines?',
        validate: guidelinesInput => {
            if (guidelinesInput) {
                return true;
            } else {
                console.log('Contributing guidelines are required');
                return false;
            }
        }
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
        message: 'What is your GitHub user name?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('GitHub user name is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Email address is required');
                return false;
            }
        }
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