import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "online-shop",
    password: "0896",
    port: 5432,
});

export default pool;
