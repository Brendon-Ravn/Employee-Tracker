var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: "",
  database: "employeetracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  init();
});

function init() {
  inquirer.prompt({
    name: "lookup",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "look up employees",
      "look up department",
      "look up role",
      "look up employees by role", 
      "look up employees by manager",
      "add employees",
      "remove employees",
      "update employees role",
      "update employees manager",
      "look up department budget"
    ]
  }).then(function(answer) {
    if (answer.lookup === "look up employees") {
      viewEmployees();
  } else if(answer.lookup === "look up department") {
      viewDepartment();
  } else if(answer.lookup === "look up role") {
      viewRole();
  } else if(answer.lookup === "look up employees by role") {
      viewEmployeesRole();
  } else if(answer.lookup === "look up employees by manager") {
      viewEmployeesManager();
  } else if(answer.lookup === "add employees") {
      addEmployees();
  } else if(answer.lookup === "remove employees") {
      removeEmployees();
  } else if(answer.lookup === "update employees role") {
      updateEmployeesRole();
  } else if(answer.lookup === "update employees manager") {
      updateEmployeesManager();
  } else if(answer.lookup === "look up department budget") {
      viewBudget();
  } else{
      connection.end();
    }
  });
}

function viewEmployees() {

}

function viewDepartment() {

}

function viewRole() {

}

function viewEmployeesRole() {

}

function viewEmployeesManager() {

}

function addEmployees() {

}

function removeEmployees() {

}

function updateEmployeesRole() {

}

function updateEmployeesManager() {

}

function viewBudget() {

}