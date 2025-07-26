import { Hono } from "hono";
import { auth } from "../lib/auth";
import { route } from "./routes/admin-menu-route";
import { cors } from "hono/cors";
import { v2 as cloudinary } from "cloudinary";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

app.use(
  "*",
  cors({
    origin: ["http://localhost:3001"],
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// app.use(async (c, next) => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
//   await next();
// });

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.route("/api", route);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
