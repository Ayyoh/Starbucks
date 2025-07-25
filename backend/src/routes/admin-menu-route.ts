import { Hono } from "hono";
import { addHotDrink, deleteAllHotDrinks, deleteHotDrink, getAllHotDrink, getSingleHotDrink, updateHotDrink } from "../controller/admin-manage-menu";

export const route = new Hono();

route.post("/add-hot-drink", addHotDrink);

route.get("/get-hot-drinks", getAllHotDrink);
route.get("/get-hot-drinks/:id", getSingleHotDrink)

route.delete("/delete-all-hot-drink", deleteAllHotDrinks)
route.delete("/delete-hot-drink/:id", deleteHotDrink)

route.put("/update-hot-drink/:id", updateHotDrink)