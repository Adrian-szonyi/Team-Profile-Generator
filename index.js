const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: "What is your new team manager's name?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "EmployeeID",
      message: "What is their Employee ID?",
    },
    {
      type: "input",
      name: "OfficeNumber",
      message: "What is their Office number?",
    },
    {
        type: "list",
        name: "Role",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "Team finished"],
      },
    {
      type: "input",
      name: "School",
      message: "What school do they go to?",
    },
    {
      type: "input",
      name: "Github",
      message: "What is their Github username?",
    },
  ]);
};

const generateHTML = (answers) =>
  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      '
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./dist/stylesheet.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.Name}</h5>
      <h4 class="card-title">${answers.Role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto:${answers.Email}" class="card-link">${answers.Email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${answers.Github}" class="card-link">https://github.com/${answers.Github}</a></li>
      <li class="list-group-item">Employee ID: ${answers.EmployeeID}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    </ul>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.Name}</h5>
      <h4 class="card-title">${answers.Role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto:${answers.Email}" class="card-link">${answers.Email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${answers.Github}" class="card-link">https://github.com/${answers.Github}</a></li>
      <li class="list-group-item">Employee ID: ${answers.EmployeeID}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    </ul>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.Name}</h5>
      <h4 class="card-title">${answers.Role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto:${answers.Email}" class="card-link">${answers.Email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${answers.Github}" class="card-link">https://github.com/${answers.Github}</a></li>
      <li class="list-group-item">Employee ID: ${answers.EmployeeID}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    </ul>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.Name}</h5>
      <h4 class="card-title">${answers.Role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto:${answers.Email}" class="card-link">${answers.Email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${answers.Github}" class="card-link">https://github.com/${answers.Github}</a></li>
      <li class="list-group-item">Employee ID: ${answers.EmployeeID}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    </ul>
  </div>
    </body>
  </html>
  

`;

const init = () => {
  promptUser().then(
    (answers) =>
      fs.writeFile(
        `index-${Date.now()}.html`,
        generateHTML(answers),
        (err) => {
          console.log(answers);
          if (err) throw err;

          console.log("The file has been saved!");
        }
      )
  );
};

init();
