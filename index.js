const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

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
  ]);
};


const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: "What is your Engineer's name?",
    },
    {
      type: "input",
      name: "EmployeeID",
      message: "What is their Employee ID?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is their email address?",
    },

    {
      type: "input",
      name: "Github",
      message: "What is their Github username?",
    },
    {
      type: "list",
      name: "Role",
      message: "Would you like to add to your team?",
      choices: ["Engineer", "Intern", "Team finished"],
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: "What is your intern's name?",
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
      name: "School",
      message: "What school do they go to?",
    },
    {
      type: "list",
      name: "Role",
      message: "Would you like to add to your team?",
      choices: ["Engineer", "Intern", "Team finished"],
    },
  ]);
};


const generatehtml = (answers, engineers, interns) => {
  let html = "";

  html += 
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
    <div class="card-Manager" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.Name}</h5>
      <div class="titleimage">
        <img src = './images/coffee-cup.png'>
        <h4 class="card-title">Manager</h4>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto:${answers.Email}" class="card-link">${answers.Email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${answers.Github}" class="card-link">https://github.com/${answers.Github}</a></li>
      <li class="list-group-item">Employee ID: ${answers.EmployeeID}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    </ul>
  </div>
`;

engineers.forEach((engineers) => {

html += `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${engineers.Name}</h5>
  <div class="titleimage">
        <img src = './images/glasses.png'>
        <h4 class="card-title">Engineer</h4>
      </div>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: <a href="mailto:${engineers.Email}" class="card-link">${engineers.Email}</a></li>
  <li class="list-group-item">Github: <a href="https://github.com/${engineers.Github}" class="card-link">https://github.com/${engineers.Github}</a></li>
  <li class="list-group-item">Employee ID: ${engineers.EmployeeID}</li>
</ul>
</div>
`;

});

interns.forEach((interns) => {

  html += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${interns.Name}</h5>
    <div class="titleimage">
    <img src = './images/cap.png'>
    <h4 class="card-title">Intern</h4>
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email: <a href="mailto:${interns.Email}" class="card-link">${interns.Email}</a></li>
    <li class="list-group-item">Employee ID: ${interns.EmployeeID}</li>
    <li class="list-group-item">School: ${interns.School}</li>
  </ul>
  </div>
  `;
  
  });
  html += `
    </body>
  </html>`;
  return html
};
const employees = [];
const init = async () => {
  const answers = await promptUser();
  const engineers = [];
  const interns = [];
  const manager = [];

  let teamComplete = false;

  let currentRole = answers.Role;
  manager.push(answers);
  while (!teamComplete) {
    // Ask the user who the new employee is
    switch (currentRole) {
      case "Engineer":
        const engineerAnswers = await promptEngineer();

        currentRole = engineerAnswers.Role;
        engineers.push(engineerAnswers);
        break;
      case "Intern":
        // ...
        const internAnswers = await promptIntern();
        currentRole = internAnswers.Role;
        interns.push(internAnswers);
        break;
      case "Team finished":
        // End the program (by breaking out of the while loop)
        teamComplete = true;
        break;
    }
  }

  
  fs.writeFile(`index-${Date.now()}.html`, generatehtml(answers, engineers, interns), (err) => {
    if (err) throw err;

      console.log("The file has been saved!");
  })

let newintern = interns.forEach((interns) => {
const Fullname = interns.Name
const id = interns.EmployeeID
const email = interns.Email
const role = "Intern"
const school = interns.school
newintern = new Intern(Fullname, id, email, role, school)

})

let newengineer = engineers.forEach((engineers) => {
  const Fullname = engineers.Name
  const id = engineers.EmployeeID
  const email = engineers.Email
  const role = "Engineer"
  const github = engineers.Github
  newengineer = new Engineer(Fullname, id, email, role, github)

})
let newManager = new Manager(
  answers.Name,
  answers.EmployeeID,
  answers.Email,
  "Manager",
  answers.OfficeNumber
);

  // engineers = new Engineer(Fullname, id, email, role, github)
  // interns = new Intern(Fullname, id, email, role, school)
  // manager = new Manager(Fullname, id, email, role, OfficeNumber)
};

init();
