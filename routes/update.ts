import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";
import { eq } from "drizzle-orm";

const updateRoutes = new Hono();

updateRoutes.put("/:id", async (c) => {
  const id = c.req.param("id");
  const { title, completed } = await c.req.json();
  const result = await db.update(todos).set({ title, completed }).where(eq(todos.id, Number(id)));
  return c.json({ message: "Todo updated", result });
});

export default updateRoutes;
