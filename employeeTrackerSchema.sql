DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE departments (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary (10) NOT NULL,
  department_id INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER(10),
  PRIMARY KEY (id)
);