import { Pool } from 'pg';

const {
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_NAME
} = process.env

const pool = new Pool({
    password: DB_PASSWORD,
    database: DB_NAME,
    user: DB_USER,
    host: DB_HOST,
    port: parseInt(DB_PORT || '5432'),
});

export const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database successfully.');
        client.release();
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

export default pool;
