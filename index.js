const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "please provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a detailed description:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and eamples for usage:"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your project?"
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
