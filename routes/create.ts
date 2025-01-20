import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";

const createRoutes = new Hono();

createRoutes.post("/", async (c) => {
  const { title, completed } = await c.req.json();
  const result = await db.insert(todos).values({ title, completed });
  return c.json({ message: "Todo created", result });
});
export default createRoutes;
