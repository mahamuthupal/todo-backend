import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";
import { eq } from "drizzle-orm";
import { z } from "zod";

const UpdateSchema = z.object({
  title: z.string().min(1, "Title is required"), 
  completed: z.boolean(), 
});

const updateRoutes = new Hono();

updateRoutes.put("/:id", async (c) => {
  const id = c.req.param("id");
  const data = UpdateSchema.parse(await c.req.json());
  const result = await db.update(todos).set(data).where(eq(todos.id, Number(id)));
  return c.json({ message: "Todo updated", result });
});

export default updateRoutes;
