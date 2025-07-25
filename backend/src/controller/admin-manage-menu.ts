import { Context, Hono } from "hono";
import { db } from "../../drizzle/db";
import { hotDrink } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

{
  /* ADD DRINKS */
}

export const addHotDrink = async (c: Context) => {
  const { name, calories, description, rating, price, image } = await c.req.json();

  if (!name || !calories || !description || !rating || !price || !image) {
    return c.json({ error: "Please fill in the form" }, 400);
  }

  try {
    const newDrink = await db
      .insert(hotDrink)
      .values({
        name,
        calories,
        description,
        rating,
        price,
        image,
      })
      .returning();

    return c.json({ message: "Hot Drink Added", data: newDrink[0] }, 201);
  } catch (error) {
    return c.json({ error: "Something went wrong" }, 500);
  }
};

{
  /* GET ALL DRINKS */
}

export const getAllHotDrink = async (c: Context) => {
  const allHotDrink = await db.select().from(hotDrink).orderBy(hotDrink.id);

  return c.json({ message: "Fetched all drinks", data: allHotDrink });
};

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

{
  /* DELETE DRINKS */
}

export const deleteAllHotDrinks = async (c: Context) => {
  const allHotDrinks = await db.delete(hotDrink).returning();

  return c.json({ message: "Deleted all hot drinks", data: allHotDrinks }, 200);
};

export const deleteHotDrink = async (c: Context) => {
  const idParam = await c.req.param("id");
  const id = Number(idParam);

  if (isNaN(id)) {
    return c.json({ error: "Invalid ID" }, 400);
  }

  const result = await db.delete(hotDrink).where(eq(hotDrink.id, id)).returning();

  if (result.length === 0) {
    return c.json({ error: "Hot drink Not Found" }, 404);
  }

  return c.json({ message: "Hot Drink Deleted", data: result[0] }, 200);
};

{
  /* UPDATE DRINKS */
}

export const updateHotDrink = async (c: Context) => {
  const idParam = await c.req.param("id");
  const id = Number(idParam);
  const { name, calories, description, rating, price, image } = await c.req.json();

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
    return c.json({ error: "Hot Drink not found" }, 404)
  }

  return c.json({ message: "Updated Hot Drink" }, 201)
};
