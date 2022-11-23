// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Badges geneated from https://shields.io/ tool
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[https://img.shields.io/badge/License-MIT-green.png]"
  } else if (license == "Apache 2.0") {
    return "[https://img.shields.io/badge/License-Apache2.0-brightgreen.png]"
  } else if (license = "Mozilla Public") {
    return "[https://img.shields.io/badge/License-Mozilla-blue.png]"
  } else if (license = "European Union Public") {
    return "[https://img.shields.io/badge/License-EuropeanUnionPublic-blueviolet.png]"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "[https://opensource.org/licenses/MIT]"
  } else if (license == "Apache 2.0") {
    return "[https://opensource.org/licenses/Apache-2.0]"
  } else if (license = "Mozilla Public") {
    return "[https://opensource.org/licenses/MPL-2.0]"
  } else if (license = "European Union Public") {
    return "[https://opensource.org/licenses/EUPL-1.1]"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
