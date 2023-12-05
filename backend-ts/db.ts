import pg from "pg";
const { Pool } = pg;
export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "online-shop",
    password: "0896",
    port: 5432,
});
