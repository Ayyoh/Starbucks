import { Context } from "hono";
import { db } from "../../../drizzle/db";
import { hotDrink } from "../../../drizzle/schema";
import { eq } from "drizzle-orm";

export const updateHotDrink = async (c: Context) => {
  const idParam = await c.req.param("id");
  const id = Number(idParam);
  const { name, calories, description, rating, price, image } =
    await c.req.json();

  if (isNaN(id)) {
    return c.json({ error: "Invalid ID" }, 400);
  }

  if (!name || !calories || !description || !rating || !price || !image) {
    return c.json({ error: "Please fill in the form" }, 400);
  }

  const result = await db
    .update(hotDrink)
    .set({ name, calories, description, rating, price, image })
    .where(eq(hotDrink.id, id))
    .returning();

  if (result.length === 0) {
    return c.json({ error: "Hot Drink not found" }, 404);
  }

  return c.json({ message: "Updated Hot Drink" }, 201);
};
