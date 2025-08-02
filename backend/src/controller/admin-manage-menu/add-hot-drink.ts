import { Context } from "hono";
import { db } from "../../../drizzle/db";
import { hotDrink } from "../../../drizzle/schema";
import z from "zod";

const addDrinkSchema = z.object({
  name: z.string(),
  type: z.string(),
  image: z.string(),
  rating: z.number(),
  reviews: z.number(),
  description: z.string(),
  price: z.number(),
  calories: z.number(),
  caffeine: z.number(),
  sugar: z.number(),
  fat: z.number(),
});

export const addHotDrink = async (c: Context) => {
  const body = await c.req.json();
  const parsed = addDrinkSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ error: "Invalid Input" }, 400);
  }

  try {
    const newDrink = await db
      .insert(hotDrink)
      .values({ ...parsed.data, price: parsed.data.price.toString() })
      .returning();

    return c.json({ message: "Hot Drink Added", data: newDrink[0] }, 201);
  } catch (error) {
    console.log(error);
    return c.json({ error: "Something went wrong" }, 500);
  }
};
