import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";

const readRoutes = new Hono();

readRoutes.get("/", async (c) => {
  const result = await db.select().from(todos);
  return c.json(result);
});

export default readRoutes;
