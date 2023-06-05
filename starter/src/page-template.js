// Define the Manager class
class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Manager";
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Define the Engineer class
class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Engineer";
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getgithub() {
    return this.github;
  }
}

// Define the Intern class
class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Intern";
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getSchool() {
    return this.school;
  }
}

// Generate the team page
function generateTeamPage(manager, engineers, interns) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <style>
          /* CSS styles omitted for brevity */
        </style>
      </head>
      <body>
        <div class="container">
          <h1>My Team</h1>
          
          <div class="row">
            <div class="col">
              ${generateManager(manager)}
            </div>
          </div>
          <div class="row">
            <div class="col">
              ${engineers.map(generateEngineer).join('')}
            </div>
          </div>
          <div class="row">
            <div class="col">
              ${interns.map(generateIntern).join('')}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Generate the manager card
function generateManager(manager) {
  return `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `;
}

// Generate the engineer card
function generateEngineer(engineer) {
  return `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getgithub()}" target="_blank">${engineer.getgithub()}</a></li>
        </ul>
      </div>
    </div>
  `;
}

// Generate the intern card
function generateIntern(intern) {
  return `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  `;
}

const teamPage = generateTeamPage(manager, [engineer1, engineer2], [intern]);
console.log(teamPage);
