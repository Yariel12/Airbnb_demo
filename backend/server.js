import app from "./App.js";
import "dotenv/config";

const PORT = process.env.PORT;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
