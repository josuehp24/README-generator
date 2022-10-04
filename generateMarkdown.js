// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge= '';
  if (license === 'MIT'){
    badge = '![GitHub licences](https://img.sheilds.io/github/licence/naereen/StrapDown.js.svg)'
  } else if (license === 'APACHE 2.0'){
    badge = '![license}((https://img.sheilds.io/badge/License-Apache%202.0-blue.svg'
  } else if (license === 'GPL v3.0'){
    badge = '![license: GPL v3](https://img.sheilds.io/badge/License-GPLv3-blue.svg'
  }else {badge = ''}

  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink ='';
  if (license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0'){
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0'){
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection =''
  if (license === 'NONE'){
    licenseSection = ''

  } else {
    licenseSection =
    `license: ${license}`
  }
  return licenseSection; 
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({project, description, install, run, GitHub, email, license, repo, contributors}) => 
  `# ${project}

  ## Description
  
  ${description}
  
  ## Table of Contents (Optional)
 
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${run}
  
  ## Credits
   GitHub: ${GitHub}
   Email: ${email}
 
  
  ## License
  
  ${license}  
    
  ## Features
  
  ${repo}
  
  ## How to Contribute

  ${contributors}
  
  ## Tests
  `
;


module.exports = {
  generateMarkdown

};
  
   