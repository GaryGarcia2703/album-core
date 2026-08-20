import { Router } from "express"
import { AlbumController } from "../controllers/AlbumController.js"
import { Album } from "../models/Album.js";

const router = Router();

// ruta principal
router.get("/api", (req,res) => {
    res.send("servidor funcionando")
})

router.get("/albums", AlbumController.showAlbums)

router.get("/albums/:id", AlbumController.albumInfo)

export default router;