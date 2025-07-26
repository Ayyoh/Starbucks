import { Context } from "hono";
import { db } from "../../../drizzle/db";
import { hotDrink } from "../../../drizzle/schema";

export const addHotDrink = async (c: Context) => {
  const body = await c.req.json();
  const {
    name,
    type,
    image,
    rating,
    reviews,
    description,
    price,
    calories,
    caffeine,
    sugar,
    fat,
  } = body;

  if (
    !name ||
    !type ||
    !image ||
    !rating ||
    !reviews ||
    !description ||
    !price ||
    !calories ||
    !caffeine ||
    !sugar ||
    !fat
  ) {
    return c.json({ error: "Please fill in the form" }, 400);
  }

  try {
    const newDrink = await db
      .insert(hotDrink)
      .values({
        name,
        type,
        image,
        rating,
        reviews,
        description,
        price,
        calories,
        caffeine,
        sugar,
        fat,
      })
      .returning();

    return c.json({ message: "Hot Drink Added", data: newDrink[0] }, 201);
  } catch (error) {
    console.log(error)
    return c.json({ error: "Something went wrong" }, 500);
  }
};
