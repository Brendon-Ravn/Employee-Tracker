USE employeetracker_db;

INSERT INTO departments (name)
VALUES ("Operations");
INSERT INTO departments (name)
VALUES ("HR");
INSERT INTO departments (name)
VALUES ("IT");

INSERT INTO roles (title, salary, department_id)
VALUES ("Operations manager", "500000", 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("HR manager", "350000", 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("IT manager", "250000", 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Operations employee", "40000", 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("HR employee", "65000", 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("IT employee", "75000", 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("John", "Smith", 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Rabbit", 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Harry", "Watson", 5, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Watson", 5, 2);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Brittany", "Doss", 2);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Jack", "Johnson", 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Terry", "Charles", 6, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Haley", "Berries", 6, 3);