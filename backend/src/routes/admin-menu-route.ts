import { Hono } from "hono";
import { addHotDrink } from "../controller/admin-manage-menu/add-hot-drink";
import { getAllHotDrink, getSingleHotDrink } from "../controller/admin-manage-menu/get-hot-drinks";
import { deleteAllHotDrinks, deleteHotDrink } from "../controller/admin-manage-menu/delete-hot-drink";
import { updateHotDrink } from "../controller/admin-manage-menu/update-hot-drink";

export const route = new Hono();

route.post("/add-hot-drink", addHotDrink);

route.get("/get-all-hot-drink", getAllHotDrink);
route.get("/get-hot-drink/:id", getSingleHotDrink)

route.delete("/delete-all-hot-drink", deleteAllHotDrinks)
route.delete("/delete-hot-drink/:id", deleteHotDrink)

route.put("/update-hot-drink/:id", updateHotDrink)