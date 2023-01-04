// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `[badge] ${license}`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `[${license}] https://choosealicense.com/licenses/${license}/`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `## [License]  ${license}`;
  }else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
 
  ## Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contact]

  ## [Description](#Table of Contents)
  
  ${data.description}
  
  ## [Installation](#Table of Contents)
  
  ${data.installation}
  
  ## [Usage](#Table of Contents)
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## [Test](#Table of Contents)
  
  ${data.test}
  
  ## [Contact](#Table of Content)
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
