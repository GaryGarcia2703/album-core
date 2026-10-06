import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import AlbumRoutes from "./src/routes/AlbumRoutes.js";
import { sequelize } from "./src/config/db.js";

// Importar asociaciones
import "./src/models/Associations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "*", // Al estar en el mismo servidor/dominio, ya no hay problemas de CORS
    credentials: true,
  })
);
app.use(express.json());

// 1. Rutas de la API (DEBEN ir primero)
app.use("/api", AlbumRoutes);

// 2. Servir los archivos estáticos generados por el build de React (Vite)
// Asumiendo la estructura: raíz/ -> front-end/ y backend/
const frontendDistPath = path.join(__dirname, "../front-end/dist");
app.use(express.static(frontendDistPath));

// 3. Cualquier otra ruta que NO sea /api, devuelve el index.html de React
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDistPath, "index.html"));
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB conectada!!!");

    await sequelize.sync();
    console.log("Tablas sincronizadas.");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar:", error);
  }
}

startServer();