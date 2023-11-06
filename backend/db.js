import { Pool } from "pg";
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "online-shop",
    password: "0896",
    port: "5432",
});
export default pool;
