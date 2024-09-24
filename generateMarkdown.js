// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `![License: MIT] https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge`;
  } else if (license === `Creative Commons`){
    return `![License: Creative Commons] https://img.shields.io/badge/License-CC_0-EF9421.svg?style=for-the-badge`;    
  } else if (license === `GNU`) {
    return `![License: GNU] https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `https://img.shields.io/badge/License-MIT-ac8b11.svg?style=for-the-badge&labelColor=yellow`;
  } else if (license === `Creative Commons`){
    return `https://img.shields.io/badge/License-CC_0-EF9421.svg?style=for-the-badge`;    
  } else if (license === `GNU`) {
    return `https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "" ? `## License` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description
${response.description}

The template used to build this file was found at the following location: Professional Readme Guide. Professional README Guide | The Full-Stack Blog. (n.d.). https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

This application is covered under the ${response.license} license.

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

${response.questions}
`;
}

export default generateMarkdown;
