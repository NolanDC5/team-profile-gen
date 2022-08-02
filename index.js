// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./lib/generate-page");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const employeeIndex = [];

// Array object questions asked in CLI to user
console.log(`
  ===================================================
              Create a Team Profile
  ===================================================
  `)
  const questions = async () => {

  const position = await inquirer
    .prompt([
     {
        type: "list",
        message: "What is your role in the company?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      }, 
    ])
      if (position.role === "Manager"){
        const managerResponse = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
              },
              {
                type: "input",
                message: "What is your ID number?",
                name: "id",
              },
              {
                type: "input",
                message: "What is your email address?",
                name: "email",
              }, 
              {
                type: "input",
                message: "What is your office number",
                name: "officeNumber",
              },
            ])
            const newManager = new Manager(
                managerResponse.name,
                managerResponse.id,
                managerResponse.email,
                managerResponse.officeNumber
              );
              employeeIndex.push(newManager);
    
            } else if (position.role === "Engineer") {
        const engineerResponse = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name",
              },
              {
                type: "input",
                message: "What is their ID number?",
                name: "id",
              },
              {
                type: "input",
                message: "What is their email address?",
                name: "email",
              },
              {
                type: "input",
                message: "What is their GitHub username?",
                name: "github",
              }
        ])

    const newEngineer = new Engineer(
          engineerResponse.name,
          engineerResponse.id,
          engineerResponse.email,
          engineerResponse.github
        );
        employeeIndex.push(newEngineer);
    } else if (position.role === "Intern") {
        const internResponse = await inquirer
          .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name",
              },
              {
                type: "input",
                message: "What is their ID number?",
                name: "id",
              },
              {
                type: "input",
                message: "What is their email address?",
                name: "email",
              },
              {
                type: "input",
                message: "What university do/did they go to?",
                name: "school",
              },
            ])
            const newIntern = new Intern(
                internResponse.name,
                internResponse.id,
                internResponse.email,
                internResponse.school
              );
              employeeIndex.push(newIntern)
    }
}



    async function promptQuestions() {
  await questions()
    
  
  const addMemberResponse = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create your team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberResponse.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();

function createTeam () {
  console.log("new employee", employeeIndex)
  fs.writeFileSync(
    "./index.html",
    generateTeam(employeeIndex),
    "utf-8",
    console.log('SUCCESS! Your Team Portfolio Has been generated')
  );
}

