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

  return `# ${data.title}

`;
}



module.exports = generateMarkdown;
