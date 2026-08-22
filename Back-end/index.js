import express from "express";
import cors from "cors";

import AlbumRoutes from "./src/routes/AlbumRoutes.js";
import { sequelize } from "./src/config/db.js";

// IMPORTANTE:
// Esto carga Album, Track y sus asociaciones
import "./src/models/Associations.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.use("/api", AlbumRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("DB conectada!!!");

        await sequelize.sync();
        console.log("Tablas sincronizadas.");

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Error al conectar:", error);
    }
}

startServer();