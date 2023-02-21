// function to generate markdown for README
function generateMarkdown(data) {

//Defining the license badge image URL based on license selected by user
let licenseBadgeUrl = "";
  switch (data.license) {
    case "MIT":
      licenseBadgeUrl = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache":
      licenseBadgeUrl = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "GPL":
      licenseBadgeUrl = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "BSD":
      licenseBadgeUrl = "https://img.shields.io/badge/LicenseBSD%203--Clause-blue.svg";
      break;
    default:
      licenseBadgeUrl = "";
};

function getLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}


  return `# ${data.title}

 [![License](${licenseBadgeUrl})](${getLicenseLink(data.license)})

 ## Description
 ${data.description}

 ## Table of Contents

  *[Installation](installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[License](#license)
  *[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have any questions, please contact me at ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.username}/)


`;
}



module.exports = generateMarkdown;
