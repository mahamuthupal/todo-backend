import { Hono } from "hono";
import createRoutes from "./routes/create.ts";
import readRoutes from "./routes/read.ts";
import updateRoutes from "./routes/update.ts";
import deleteRoutes from "./routes/delete.ts";

const api = new Hono();

api.route("/create", createRoutes);
api.route("/read", readRoutes);
api.route("/update", updateRoutes);
api.route("/delete", deleteRoutes);

console.log("Server running on http://localhost:8000");
Deno.serve({ port: 8000 }, api.fetch);
