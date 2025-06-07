import express from "express";
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.route.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import logMiddleare from "./middlewares/log.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create the uploads directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}

const app = express();

// Inbuilt-Middleware
app.use(express.json());

//Global Middleware
app.use(logMiddleare)

app.use("/public", publicRoutes);
app.use("/private", privateRoutes);


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
