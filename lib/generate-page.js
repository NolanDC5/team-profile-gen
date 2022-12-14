const generateTeam = (team) => {


    //HTML for the manager section
    const generateManager = (manager) => {
      return `
          <div class="card p-3 mb-5 bg-white rounded">
          <div class="card-header bg-secondary">
              <h2 class="card-title text-light">${manager.getName()}</h2>
              <h3 class="card-title text-light"><i class="fas fa-mug-hot mr-2 text-light"></i>${manager.getRole()}</h3>
          </div>
          <div>
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
       `;
    };
  
    // HTML for the engineer section
    const generateEngineer = (engineer) => {
      return `
          <div class="card p-3 mb-5 bg-white rounded">
      <div class="card-header bg-secondary">
          <h2 class="card-title text-light">${engineer.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-glasses mr-2 text-light"></i>${engineer.getRole()}</h3>
      </div>
      <div>
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
   `;
    };
    // HTML for the intern section
    const generateIntern = (intern) => {
      return `
          <div class="card p-3 mb-5 bg-white rounded">
      <div class="card-header bg-secondary">
          <h2 class="card-title text-light">${intern.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-user-graduate mr-2 text-light"></i>${intern.getRole()}</h3>
      </div>
      <div>
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
   `;
    };
  
    const htmlPage = [];
  
    htmlPage.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    htmlPage.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    htmlPage.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return htmlPage.join("");
  };
  
  // MAIN HTML
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 bg-primary text-light">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-12 d-flex justify-content-around">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };
  