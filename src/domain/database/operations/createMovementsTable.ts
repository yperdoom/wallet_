import pool from "../database";

export default async function createMovementsTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS movements (
            id SERIAL PRIMARY KEY,
            account_id INTEGER NOT NULL REFERENCES accounts(id),
            type VARCHAR(10) NOT NULL CHECK (type IN ('income', 'expense')),
            amount NUMERIC(10, 2) NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
}
