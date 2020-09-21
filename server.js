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
      "look up department budget",
      "I'm finished"
    ]
  }).then(function(answer) {
    if (answer.lookup === "look up employees") {
      lookupEmployees();
  } else if(answer.lookup === "look up department") {
      lookupDepartment();
  } else if(answer.lookup === "look up role") {
      lookupRole();
  } else if(answer.lookup === "look up employees by role") {
      lookupEmployeesRole();
  } else if(answer.lookup === "look up employees by manager") {
      lookupEmployeesManager();
  } else if(answer.lookup === "add employees") {
      addEmployees();
  } else if(answer.lookup === "remove employees") {
      removeEmployees();
  } else if(answer.lookup === "update employees role") {
      updateEmployeesRole();
  } else if(answer.lookup === "update employees manager") {
      updateEmployeesManager();
  } else if(answer.lookup === "look up department budget") {
      lookupBudget();
  } else{
      connection.end();
    }
  });
}

function lookupEmployees() {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupDepartment() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupRole() {

}

function lookupEmployeesRole() {

}

function lookupEmployeesManager() {

}

function addEmployees() {

}

function removeEmployees() {

}

function updateEmployeesRole() {

}

function updateEmployeesManager() {

}

function lookupBudget() {

}