import { Hono } from "hono";
import db from "../db.ts";
import { todos } from "../schema.ts";
import { z } from "zod";

const TodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().default(false),
});

const createRoutes = new Hono();

createRoutes.post("/", async (c) => {
  const data = TodoSchema.parse(await c.req.json());
  const result = await db.insert(todos).values(data);
  return c.json({ message: "Todo created", result });
});

export default createRoutes;
