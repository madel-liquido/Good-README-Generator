const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        message: "Please enter your Github username. ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your project title. ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a one paragraph project description. ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter any prerequisites if applicable i.e. what things do you need to install the software and how to install them.",
        name: "prerequisites"
    },
    {
        type: "input",
        message: "Enter the installation process i.e. provide a step by step series of examples that describe how to get the development environment running. ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of this project. ",
        name: "usage"

    },
    {
        type: "input",
        message: "Explain how to run the automated tests for this system if applicable. ",
        name: "tests"
    },
    {
        type: "input",
        message: "Add additional notes about how to deploy this project on a live system. ",
        name: "deployment"
    },
    {
        type: "input",
        message: "Enter the frameworks and tools used for this project. ",
        name: "frameworksAndTools"
    },
    {
        type: "input",
        message: "Enter the contributing information. ",
        name: "contribute"

    },
    {
        type: "input",
        message: "Enter the authors and provide a list of contributors where applicable. ",
        name: "authors"

    },
    {
        type: "input",
        message: "Enter the license(s) used for this project. ",
        name: "licenses"
    },
    {
        type: "input",
        message: "Enter any acknowledgements. ",
        name: "acknowledgements"
    }
];

function writeToFile(fileName, data) {
    //output things to read me
}

function init() {
    //access code

}

init();