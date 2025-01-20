import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";
import { eq } from "drizzle-orm";

const deleteRoutes = new Hono();

deleteRoutes.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const result = await db.delete(todos).where(eq(todos.id, Number(id)));
  return c.json({ message: "Todo deleted", result });
});

export default deleteRoutes;
