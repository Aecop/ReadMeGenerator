// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '!!REQUIRE!! What will be your title for the project?',
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log('Please Enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: '!!REQUIRE!! What is your Github Username?',
        validate: githubInput => {
            if (githubInput){
                return true
            }else {
                console.log('Please enter your github user name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: '!!REQUIRE!! What is your email address?',
        validate: emailInput => {
            if (emailInput){
                return true;
            }else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: '!!REQUIRE!! Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '!!REQUIRE!! Please provide description of the project!',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please write description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: '!!REQUIRE!! Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: '!!REQUIRE!! Please provide instructions on how to test the app.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Can other develeoper contribute to this project?',
        default: true
    }
];


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('GeneratedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                correct: true,
                message: 'File has been created',
            });

        });
    });
}

// Prompt to ask user for question and input
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// TODO: Create a function to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return  generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeToFile(pageMD);
    })






