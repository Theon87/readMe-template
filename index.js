// DEPENDENCIES
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// DATA
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: colors.magenta("What is the title of your repo"),
        name: "title"
    },
    {
        type: "input",
        message: colors.magenta("What is the description of your repo?"),
        name: "description"
    },
    {
        type: "input",
        message: colors.magenta("Describe the installation process."),
        name: "installation"
    },
    {
        type: "input",
        message: colors.magenta("How should this app be used?"),
        name: "usage"
    },
    {
        type: "list",
        message: colors.magenta("Which license did you use?"),
        name: "license",
        choices: ["MIT", "Creative Commons license family", "Microsoft Public License"]
    },
    {
        type: "input",
        message: colors.magenta("Describe how you want users to contribute."),
        name: "contributing"
    },
    {
        type: "input",
        message: colors.magenta("Describe how to test."),
        name: "tests"
    },
    {
        type: "input",
        message: colors.magenta("Where do you want messages to be sent?"),
        name: "questions"
    }
]

// // FUNCTIONS
// // TODO: Create a function to write README file
const generateMarkdown = (response) => {
    return `# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## How to Contribute

${response.contributing}

## Tests

${response.tests}

##  Questions

${response.questions}

## Template Citation
Professional Readme Guide. Professional README Guide | The Full-Stack Blog. (n.d.). https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide`;
};

const writeToFile = (response) => fs.writeFile('README.md', generateMarkdown(response), (err) => err? console.log(err) : console.log("Success!"))

// USER INTERACTIONS
// TODO: Create a function to initialize app
const init = () => {
    console.log (colors.rainbow("Enter your informaiton to create a README file."))
    inquirer
    .prompt(questions)
    .then(writeToFile);
}

// INITIALIZATIONS
// Function call to initialize app
init();
