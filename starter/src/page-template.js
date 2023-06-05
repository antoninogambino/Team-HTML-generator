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

function generateTeamPage(manager, engineers, interns) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <style>
          body {
            background: linear-gradient(to bottom right, #004EFF, #00C0FF);
            background-repeat: no-repeat;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
          }

          .container {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            width: 80%;
            max-width: 800px;
          }

          h1 {
            text-align: center;
            color: #004EFF;
          }

          .card {
            margin-bottom: 20px;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
          }

          .card-header {
            background-color: #f8f9fa;
            padding: 10px;
          }

          .card-title {
            margin-bottom: 5px;
          }

          .list-group {
            margin-bottom: 0;
          }

          .list-group-item {
            border-radius: 0;
          }
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

export { generateTeamPage };
