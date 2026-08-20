import { Album } from "../models/Album.js";

export class AlbumController {
    static showAlbums = async (req, res) => {
        try {
            const albums = await Album.findAll();
        
            return res.status(200).json(albums)
        } catch (error) {
            return res.status(500).json({ error: error.mesage })
        } 
    };

    static albumInfo = async (req, res) => {
        try {
            const albumId = req.params.id;
            const album = await Album.findOne({
                where: {
                    id: albumId
                }
            })
            
            if (!album) {
            return res.status(404).json({ error: "Álbum no encontrado" });
}

            return res.status(200).json(album)
        } catch (error) {
            return res.status(500).json({ error: error.mesage })
        }
    }
}