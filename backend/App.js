import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";

// config de dotenv
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

app.use(express.json());

// Rutas de apis
app.use("/api/users", userRouter);

// api principal de prueba.
app.get("/", (req, res) => {
  res.send("Backend Airbnb funcionando");
});

export default app;
