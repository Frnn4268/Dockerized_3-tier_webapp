-- Table creation and initial data insertion
CREATE SCHEMA IF NOT EXISTS company;

CREATE TABLE IF NOT EXISTS company.employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    position VARCHAR(50),
    salary NUMERIC(10, 2)
);

CREATE TABLE IF NOT EXISTS company.departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    budget NUMERIC(12, 2)
);

CREATE TABLE IF NOT EXISTS company.projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT REFERENCES company.departments(id),
    start_date DATE,
    end_date DATE
);

CREATE TABLE IF NOT EXISTS company.clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS company.invoices (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES company.clients(id),
    amount NUMERIC(10, 2),
    issued_date DATE NOT NULL
);