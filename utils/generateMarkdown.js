// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Badges geneated from https://shields.io/ tool
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![badge](https://img.shields.io/badge/License-MIT-green.png)"
  } else if (license == "Apache 2.0") {
    return "![badge](https://img.shields.io/badge/License-Apache2.0-brightgreen.png)"
  } else if (license = "Mozilla Public") {
    return "![badge](https://img.shields.io/badge/License-Mozilla-blue.png)"
  } else if (license = "European Union Public") {
    return "![badge](https://img.shields.io/badge/License-EuropeanUnionPublic-blueviolet.png)"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license == "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license = "Mozilla Public") {
    return "https://opensource.org/licenses/MPL-2.0"
  } else if (license = "European Union Public") {
    return "https://opensource.org/licenses/EUPL-1.1"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  # ${license.title}
  ## Licenses
  ${renderLicenseBadge}
  ${renderLicenseLink}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## User Name
  ${data.gitHubUserName}
  http://github.com/${data.gitHubUserName}

  ## Email Address
  ${data.email}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Licenses
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributing Guidelines
  ${data.contributingGuidelines}

  `;
}

module.exports = generateMarkdown;