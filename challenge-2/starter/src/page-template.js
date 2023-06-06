function generateTeamMemberCard(teamMember) {
  let additionalInfo = '';
  if (teamMember.getRole() === 'Manager') {
    additionalInfo = `Office Number: ${teamMember.getOfficeNumber()}`;
  } else if (teamMember.getRole() === 'Engineer') {
    additionalInfo = `GitHub: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a>`;
  } else if (teamMember.getRole() === 'Intern') {
    additionalInfo = `School: ${teamMember.getSchool()}`;
  }

  return `
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">${teamMember.getName()}</h2>
        <h3 class="card-subtitle">${teamMember.getRole()}</h3>
        <p class="card-text">ID: ${teamMember.getId()}</p>
        <p class="card-text">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p>
        <p class="card-text">${additionalInfo}</p>
      </div>
    </div>
  `;
}

function generateTeamPage(manager, teamMembers) {
  const teamMemberCards = teamMembers.map(generateTeamMemberCard).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Page</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
      <header class="text-center">
        <h1>My Team</h1>
      </header>
      <main class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            ${generateTeamMemberCard(manager)}
          </div>
          ${teamMemberCards}
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `;
}

export { generateTeamPage };
