INSERT INTO users (name, email, password_hash) VALUES
('John Doe', 'john@example.com', 'hashed_password_1'),
('Jane Smith', 'jane@example.com', 'hashed_password_2');

INSERT INTO accounts (user_id, name, type, balance) VALUES
(1, 'Main Checking Account', 'checking', 5000.00),
(1, 'Savings Account', 'savings', 10000.00),
(2, 'Credit Card', 'credit', -1500.00);

INSERT INTO transactions (account_id, type, amount, description) VALUES
(1, 'income', 2000.00, 'Salary for December'),
(1, 'expense', 150.00, 'Groceries'),
(2, 'expense', 500.00, 'Online Shopping'),
(3, 'income', 300.00, 'Refund for returns');
