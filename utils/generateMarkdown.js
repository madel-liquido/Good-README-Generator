function generateMarkdown(data) {
    return `
# ${data.title}![GitHub package.json version](https://img.shields.io/github/package-json/v/madel-liquido/Good-README-Generator)
${data.description}

# Tables of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Deployment](#deployment)
* [Built With](#builtWith)
* [Contributing](#contribute)
* [Authors](#authors)
* [License](#license)
* [Acknowledgements](#acknowledgements)

##Prerequisites 
${data.prerequisites}
## Installation
${data.installation}
#Usage
${data.usage}
#Tests
${data.tests}
#Deployment
${data.deployment}
#Built With
${data.builtWith}
#Contributing
${data.contribute}
#Authors
${data.authors}
#License
${data.licenses}
#Acknowledgements
${data.acknowledgements}

# Questions
![Profile Avatar](${data.profilePic})
Please e-mail me at ${data.email} with any question pertaining to the project.
`;
}

module.exports = generateMarkdown;