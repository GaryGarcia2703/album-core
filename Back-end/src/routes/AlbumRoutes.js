import { Router } from "express"
import { AlbumController } from "../controllers/AlbumController.js"

const router = Router();

// ruta principal
router.get("/api", (req,res) => {
    res.send("servidor funcionando")
})

router.get("/albums", AlbumController.showAlbums)

export default router;