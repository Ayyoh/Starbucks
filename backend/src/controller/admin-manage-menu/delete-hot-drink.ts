import { Context } from "hono";
import { hotDrink } from "../../../drizzle/schema";
import { db } from "../../../drizzle/db";
import { eq } from "drizzle-orm";

// all hot drink

export const deleteAllHotDrinks = async (c: Context) => {
  const allHotDrinks = await db.delete(hotDrink).returning();

  return c.json({ message: "Deleted all hot drinks", data: allHotDrinks }, 200);
};

// single hot drink

export const deleteHotDrink = async (c: Context) => {
  const idParam = await c.req.param("id");
  const id = Number(idParam);

  if (isNaN(id)) {
    return c.json({ error: "Invalid ID" }, 400);
  }

  const result = await db
    .delete(hotDrink)
    .where(eq(hotDrink.id, id))
    .returning();

  if (result.length === 0) {
    return c.json({ error: "Hot drink Not Found" }, 404);
  }

  return c.json({ message: "Hot Drink Deleted", data: result[0] }, 200);
};