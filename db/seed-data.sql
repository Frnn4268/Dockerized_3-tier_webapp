-- Initial data insertion

-- Employees insert
INSERT INTO company.employees (name, email, position, salary) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'Software Engineer', 85000.00),
('Bob Smith', 'bob.smith@example.com', 'HR Manager', 60000.00),
('Charlie Brown', 'charlie.brown@example.com', 'Marketing Specialist', 55000.00),
('Diana Prince', 'diana.prince@example.com', 'Project Manager', 95000.00),
('Ethan Hunt', 'ethan.hunt@example.com', 'DevOps Engineer', 80000.00)
ON CONFLICT (email) DO NOTHING;

-- Departments insert
INSERT INTO company.departments (name, budget) VALUES
('HR', 150000.00),
('Engineering', 500000.00),
('Marketing', 200000.00)
ON CONFLICT (name) DO NOTHING;

-- Projects insert
INSERT INTO company.projects (name, department_id, start_date, end_date) VALUES
('Website Redesign', (SELECT id FROM company.departments WHERE name = 'Marketing'), '2024-01-01', '2024-06-30'),
('Cloud Migration', (SELECT id FROM company.departments WHERE name = 'Engineering'), '2024-03-01', '2024-09-30'),
('Employee Training', (SELECT id FROM company.departments WHERE name = 'HR'), '2024-02-01', '2024-04-30')
ON CONFLICT DO NOTHING;

-- Clients insert
INSERT INTO company.clients (name, contact_email) VALUES
('Global Tech Ltd.', 'contact@globaltech.com'),
('Innovative Solutions', 'info@innovativesolutions.com')
ON CONFLICT (contact_email) DO NOTHING;

-- Invoices insert
INSERT INTO company.invoices (client_id, amount, issued_date) VALUES
((SELECT id FROM company.clients WHERE name = 'Global Tech Ltd.'), 15000.00, '2024-01-10'),
((SELECT id FROM company.clients WHERE name = 'Innovative Solutions'), 20000.00, '2024-01-15')
ON CONFLICT DO NOTHING;
