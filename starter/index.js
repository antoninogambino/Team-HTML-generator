import fs from 'fs';
import inquirer from 'inquirer';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import { generateTeamPage } from './src/page-template.js';

// Function to prompt user for manager details
function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the manager\'s name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the manager\'s ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the manager\'s email address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the manager\'s office number:',
    },
  ]);
}

// Function to prompt user for team member details
function promptTeamMember() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select the team member\'s role:',
      choices: ['Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the team member\'s name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the team member\'s ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the team member\'s email address:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the engineer\'s GitHub username:',
      when: (answers) => answers.role === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the intern\'s school:',
      when: (answers) => answers.role === 'Intern',
    },
    {
      type: 'confirm',
      name: 'addMore',
      message: 'Add another team member?',
      default: false,
    },
  ]);
}

// Function to initialize the application
async function init() {
  try {
    console.log('Please enter manager details:');
    const { name, id, email, officeNumber } = await promptManager();
    const manager = new Manager(name, id, email, officeNumber);

    const teamMembers = [];
    let addMore = true;

    while (addMore) {
      console.log('Please enter team member details:');
      const { role, name, id, email, github, school, addMore: continueAdding } = await promptTeamMember();

      if (role === 'Engineer') {
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
      } else if (role === 'Intern') {
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
      }

      addMore = continueAdding;
    }

    const teamPageHTML = generateTeamPage(manager, teamMembers, []);
    fs.writeFileSync('team.html', teamPageHTML);

    console.log('Team page generated successfully!');
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

// Start the application
init();
