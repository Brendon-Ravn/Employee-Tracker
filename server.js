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
      "Look up employees",
      "Look up department",
      "Look up role",
      "Look up employees by role", 
      "Look up employees by manager",
      "Add department",
      "Add role",
      "Add employee",
      "Remove department",
      "Remove role",
      "Remove employee",
      "Update employees role",
      "Update employees manager",
      "I'm finished"
    ]
  }).then(function(answer) {
    if (answer.lookup === "Look up employees") {
      lookupEmp();
    } else if (answer.lookup === "Look up department") {
      lookupDep();
    } else if (answer.lookup === "Look up role") {
      lookupRoles();
    } else if (answer.lookup === "Look up employees by role") {
      lookupEmpRole();
    } else if (answer.lookup === "Look up employees by manager") {
      lookupEmpManager();
    } else if (answer.lookup === "Add department") {
      addDep();
    } else if (answer.lookup === "Add role") {
      addRole();
    } else if (answer.lookup === "Add employee") {
      addEmp();
    } else if (answer.lookup === "Remove department") {
      removeDep();
    } else if (answer.lookup === "Remove role") {
      removeRole();
    } else if (answer.lookup === "Remove employee") {
      removeEmp();
    } else if (answer.lookup === "Update employees role") {
      updateEmpRole();
    } else if (answer.lookup === "Update employees manager") {
      updateEmpManager();
    } else {
      connection.end();
    }
  });
}

function lookupEmp() {
  connection.query("SELECT * FROM employees",
  function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupDep() {
  connection.query("SELECT * FROM departments",
  function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupRoles() {
  connection.query("SELECT * FROM roles",
  function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupEmpRole() {
  connection.query("SELECT role_id, first_name, last_name FROM employees ORDER BY role_id",
  function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function lookupEmpManager() {
  connection.query("SELECT Manager_id, first_name, last_name FROM employees ORDER BY Manager_id",
  function(err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}

function addDep() {
  inquirer.prompt([
    {
      name: "depname",
      type: "input",
      message: "What is the name of the department you wish to create?"
    }
  ]).then(function(answer) {
    connection.query("INSERT INTO departments SET ?",
    {
      name: answer.depname
    },
    function(err) {
      if (err) throw err;
      console.log("Department Addition Successful!");
      init();
    });
  });
}

function addRole() {
  inquirer.prompt([
    {
      name: "choosetitle",
      type: "input",
      message: "What is the name of the role you wish to create?"
    },
    {
      name: "choosesalary",
      type: "input",
      message: "What is the salary for this new role?"
    },
    {
      name: "choosedepid",
      type: "input",
      message: "What is the department id for this new role?"
    }
  ]).then(function(answer) {
    connection.query("INSERT INTO departments SET ?",
    {
      title: answer.choosetitle,
      salary: answer.choosesalary,
      department_id: answer.choosedepid
    },
    function(err) {
      if (err) throw err;
      console.log("Role Addition Successful!");
      init();
    });
  });
}

function addEmp() {
  inquirer.prompt([
    {
      name: "first",
      type: "input",
      message: "First name of employee you are adding:"
    },
    {
      name: "last",
      type: "input",
      message: "Last name of employee you are adding:"
    },
    {
        name: "add_role",
        type: "input",
        message: "What is the role id of the position in which they will they be serving?"
      },
      {
        name: "add_manager",
        type: "input",
        message: "What is the id of their manager?",
       } 
  ]).then(function(answer) 
  {
    connection.query("INSERT INTO employees SET ?", 
      {
        first_name: answer.first,
        last_name: answer.last,
        role_id: answer.add_role,
        manager_id: answer.add_manager
      },
      function(err) {
        if (err) throw err;
        console.log("Employee Addition Successful!")
        init();
      } 
    );
  });
}

function removeDep() {
  inquirer.prompt([
    {
      name: "deletedep",
      type: "input",
      message: "ID of the department you would like to remove:"
    }
  ]).then(function(answer) 
  {
    connection.query("DELETE FROM departments WHERE ?",
      {
        id: answer.deletedep,
      },
      function(err) {
        if (err) throw err;
        console.log("Department Deletion Successful!");
        init();
      }
    );
  });
}

function removeRole() {
  inquirer.prompt([
    {
      name: "deleterole",
      type: "input",
      message: "ID of the role you would like to remove:"
    }
  ]).then(function(answer) 
  {
    connection.query("DELETE FROM roles WHERE ?",
      {
        id: answer.deleterole,
      },
      function(err) {
        if (err) throw err;
        console.log("Role Deletion Successful!");
        init();
      }
    );
  });
}

function removeEmp() {
  inquirer.prompt([
    {
      name: "deleteemp",
      type: "input",
      message: "ID of the employee you would like to remove:"
    }
  ]).then(function(answer) 
  {
    connection.query("DELETE FROM employees WHERE ?",
      {
        id: answer.deleteemp,
      },
      function(err) {
        if (err) throw err;
        console.log("Employee Deletion Successful!");
        init();
      }
    );
  });
}

function updateEmpRole() {
  inquirer.prompt([
    {
      name: "movefrom",
      type: "input",
      message: "ID of the person you want to move:"
    },
    {
      name: "moveto",
      type: "input",
      message: "What is the role ID you want to move them to?"
    }
  ]).then(function(answer) {
    connection.query("UPDATE employees SET role_id = ? WHERE id = ?",
    [answer.moveto, answer.movefrom],
    function(err, res) {
      if (err) throw err;
      console.log(res);
      init();
    });
  });
}

function updateEmpManager() {
  inquirer.prompt([
    {
      name: "switchid",
      type: "input",
      message: "ID of the person you want to change managers for:"
    },
    {
      name: "managerid",
      type: "input",
      message: "What is the id of the manager you want to move them under?"
    }
  ]).then(function(answer) {
    connection.query("UPDATE employees SET manager_id = ? WHERE id = ?",
    [answer.managerid, answer.switchid],
    function(err, res) {
      if (err) throw err;
      console.log(res);
      init();
    });
  });
}