-- Data Platform Lab: relational source of truth

CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(12, 2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

CREATE TABLE payments (
    payment_id INTEGER PRIMARY KEY,
    order_id INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

INSERT INTO customers VALUES
    (1, 'Asha', 'asha@example.com'),
    (2, 'Ravi', 'ravi@example.com');

INSERT INTO orders VALUES
    (1001, 1, 'CREATED', 1499.00, CURRENT_TIMESTAMP),
    (1002, 2, 'PAID', 899.00, CURRENT_TIMESTAMP);

INSERT INTO order_items VALUES
    (1001, 101, 1, 999.00),
    (1001, 102, 1, 500.00),
    (1002, 103, 1, 899.00);

INSERT INTO payments VALUES
    (5001, 1002, 'CAPTURED', 899.00, CURRENT_TIMESTAMP);

-- Interview query: customer order history
SELECT
    c.name,
    o.order_id,
    o.status,
    o.total_amount
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
ORDER BY o.created_at DESC;
