import { Request, Response, NextFunction } from "express";
import Logger from "../../library/Logger";
const log = new Logger();

import express from 'express';
import pool, { connectDB } from '../../domain/database/database';

const create_transactions = require('../../domain/database/sql/create_transactions');
const insert_mock_data = require('../../domain/database/sql/insert_mock_data');

export async function getMovement(request: Request, response: Response, _next: NextFunction) {
    connectDB();

    try {
        await pool.query(create_transactions);

        const result = await pool.query('SELECT * FROM transactions');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        response.status(500).send('Internal Server Error');
    }

}

export async function createMovement(request: Request, response: Response, _next: NextFunction) {

}

export async function updateMovement(request: Request, response: Response, _next: NextFunction) {

}
