// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        question: '!!REQUIRE!! What will be your title for the project?',
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
        name: 'githubName',
        question: '!!REQUIRE!! What is your Github Username?',
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
        question: '!!REQUIRE!! What is your email address?',
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
        question: 'Please provide instructions and examples for use.',
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
        type: 'list',
        name: 'license',
        question: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        question: 'Can other devleoper contribute to this project?',
        default: true
    }
];


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-readme.md', fileContent, err => {
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
    .catch(err => {
        console.log(err)
    })
}




