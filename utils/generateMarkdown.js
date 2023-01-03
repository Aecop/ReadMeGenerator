// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `![badge] ${license}`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `[${license}]\n https://choosealicense.com/licenses/${license}/`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `## [License] \n ${license}`;
  }else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
 
  ##Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)

  ## [Description](#Table of Contents)
  
  ## [Installation](#Table of Contents)
  
  ## [Usage](#Table of Contents)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
