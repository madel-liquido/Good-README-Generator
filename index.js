const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


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
        message: "Enter a project description. ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter any prerequisites if applicable i.e. what things do you need to install the software and how to install them.",
        name: "prerequisites"
    },
    {
        type: "input",
        message: "Enter the installation process.",
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
        name: "builtWith"
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

async function writeToFile(fileName, data) {
    writeFileAsync(fileName, data).then(function() {
        console.log("README.md file was successful generated!");
    }).catch(err => {
        console.log(err);
    });
};

async function init() {

    await inquirer
        .prompt(questions)
        .then(response => {
            const username = response.username;
            const apiResponse = api.getUser(username);
            apiResponse.then(res => {
                    const data = {
                        username: response.username,
                        title: response.title,
                        description: response.description,
                        prerequisites: response.prerequisites,
                        installation: response.installation,
                        usage: response.usage,
                        tests: response.tests,
                        deployment: response.deployment,
                        builtWith: response.builtWith,
                        contribute: response.contribute,
                        authors: response.authors,
                        licenses: response.licenses,
                        acknowledgements: response.acknowledgements,

                        name: res.name,
                        email: "madel.liquido@gmail.com",
                        profilePic: res.avatar_url,
                    }
                    const markdownFile = generateMarkdown(data)
                    console.log(markdownFile)
                    writeToFile("README.md", markdownFile);
                })
                .catch(err => {
                    console.log(err)
                });
        })
}

init();