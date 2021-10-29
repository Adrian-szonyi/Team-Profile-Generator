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
  ]);
};

function generateHtml(engineers, interns, managers) {
  function generateEngineer(engineer) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.Name}</h5>
          <h4 class="card-title">Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email: <a href="mailto:${engineer.Email}" class="card-link">${engineer.Email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.Github}" class="card-link">https://github.com/${engineer.Github}</a></li>
          <li class="list-group-item">Employee ID: ${engineer.EmployeeID}</li>
        <li class="list-group-item">Office Number: ${engineer.OfficeNumber}</li>
        </ul>
      </div>
    `;
  }

}
// Create arrays to store employee information

// While the user has not selected 'Finished with the Team'...

// fs.writeFileSync("output.html", generateHtml(engineers, interns, managers));

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
      <h4 class="card-title">Manager</h4>
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

const init = async () => {
  promptUser().then(async (Manageranswer) => {
    const engineers = [];
    const interns = [];
    const managers = [];

    // Flag that tells our looping program when to terminate
    let teamComplete = false;
    const promptEngineer = () => {
      return inquirer.prompt([
        {
          type: "input",
          name: "Name",
          message: "What is your Engineer's name?",
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
          name: "School",
          message: "What school do they go to?",
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
    while (!teamComplete) {
      // Ask the user who the new employee is
      await promptUser().then(async (answers) => {
        console.log(answers);
        switch (answers.role) {
          case "Engineer":
            await promptEngineer().then((engineerAnswers) => {
              console.log(engineerAnswers);
              engineers.push(engineerAnswers);
            });
            break;
          case "Intern":
            // ...
            await promptIntern().then((internAnswers) => {
              intern.push(internAnswers);
            });
            break;
          case "Finished with the Team":
            // End the program (by breaking out of the while loop)
            teamComplete = true;
            break;
        }
      });
    }
    fs.writeFile(`index-${Date.now()}.html`, generateHTML(answers), (err) => {
      console.log(answers);
      if (err) throw err;

      console.log("The file has been saved!");
    });
  });
};

init();
