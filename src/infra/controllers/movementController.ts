import { Request, Response, NextFunction } from "express";
import Logger from "../../library/Logger";
const log = new Logger();

import pool, { connectDB } from '../../domain/database/database';

export async function getMovement(request: Request, response: Response, _next: NextFunction) {
    connectDB();

    try {
        const result = await pool.query('SELECT * FROM movements');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching movements:', error);
        response.status(500).send('Internal Server Error');
    }
}

export async function createMovement(request: Request, response: Response, _next: NextFunction) {

}

export async function updateMovement(request: Request, response: Response, _next: NextFunction) {

}
