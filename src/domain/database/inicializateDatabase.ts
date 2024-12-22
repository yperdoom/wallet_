import pool, { connectDB } from "./database"

import createMovementsTable from "./operations/createMovementsTable";
import createUsersTable from "./operations/createUsersTable";

export default async function inicializeDatabase () {
    await connectDB();

    await createMovementsTable();
    await createUsersTable();
}
