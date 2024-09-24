// DEPENDENCIES
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import generateMarkdown from "./generateMarkdown.js";

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
        choices: ["MIT", "Creative Commons", "GNU", ""]
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
        message: colors.magenta("How to reach out with additional questions?"),
        name: "questions"
    },
    {
        type: "input",
        message: colors.magenta("What is your GitHub URL?"),
        name: "githubUrl"
    },
    {
        type: "input",
        message: colors.magenta("What is your email address?"),
        name: "email"
    }
]

// // FUNCTIONS
// // TODO: Create a function to write README file
const writeToFile = (response) => fs.writeFile("README.md", generateMarkdown(response), (err) => err? console.log(err) : console.log("Success!"))

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