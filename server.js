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
      lookupEmp();
  } else if(answer.lookup === "look up department") {
      lookupDep();
  } else if(answer.lookup === "look up role") {
      lookupRoles();
  } else if(answer.lookup === "look up employees by role") {
      lookupEmpRole();
  } else if(answer.lookup === "look up employees by manager") {
      lookupEmpManager();
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

function lookupEmp() {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupDep() {
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupEmpRole() {
  connection.query("SELECT role_id, first_name, last_name FROM employees ORDER BY role_id", function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupEmpManager() {

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