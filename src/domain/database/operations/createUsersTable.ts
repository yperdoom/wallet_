import pool from "../database";

export default async function createUsersTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
}