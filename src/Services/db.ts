import { Pool } from "pg";

const dotenv = require("dotenv");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: "chicken-bon",
  password: process.env.DB_PASS,
  port: 5432
});

export default pool;