import { drizzle } from "drizzle-orm/node-postgres";
import * as genericSchema from "./schema.ts";

const pg_user = "todo";
const pg_password = "todo";
const pg_host = "localhost";
const pg_db = "tododb";
const pg_ssl = false;
const pg_port = 5432;

const connectionString = `postgresql://${pg_user}:${pg_password}@${pg_host}:${pg_port}/${pg_db}?sslmode=${pg_ssl ? "require" : "disable"}`;

const db = drizzle(connectionString, { schema: { ...genericSchema } });

export default db;
