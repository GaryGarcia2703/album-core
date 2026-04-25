import express from "express";
import AlbumRoutes from "./src/routes/AlbumRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// ruta de testeo
app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

// ruta principal 
app.use("/api", AlbumRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});