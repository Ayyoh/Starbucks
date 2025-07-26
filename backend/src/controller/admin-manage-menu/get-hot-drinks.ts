import { Context } from "hono";
import { db } from "../../../drizzle/db";
import { hotDrink } from "../../../drizzle/schema";
import { eq } from "drizzle-orm";

// all hot drink

export const getAllHotDrink = async (c: Context) => {
  const allHotDrink = await db.select().from(hotDrink).orderBy(hotDrink.id);

  return c.json({ message: "Fetched all drinks", data: allHotDrink });
};

//  single hot drink

export const getSingleHotDrink = async (c: Context) => {
  const idParam = await c.req.param("id");
  const id = Number(idParam);

  if (isNaN(id)) {
    return c.json({ error: "Invalid ID" }, 400);
  }

  const result = await db.select().from(hotDrink).where(eq(hotDrink.id, id));

  if (result.length === 0) {
    return c.json({ error: "Drink not found" }, 404);
  }

  return c.json({ data: result[0] }, 200);
};