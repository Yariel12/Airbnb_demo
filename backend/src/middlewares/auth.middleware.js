import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Middleware para proteger rutas
const SECRET_KEY = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  try {
    // verificar tokens JWT por auntenticación en los headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Token inválido" });
  }
};
