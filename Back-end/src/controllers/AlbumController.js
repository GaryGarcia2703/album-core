import { Album } from "../models/Album.js";
import { Tracks } from "../models/Tracks.js";


export class AlbumController {
    static showAlbums = async (req, res) => {
        try {
            const albums = await Album.findAll();
        
            return res.status(200).json(albums)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        } 
    };

    static albumInfo = async (req, res) => {
        try {
            const albumId = req.params.id;
            const album = await Album.findOne({
                where: {
                    id: albumId
                }, 

                // adicione el include para buscar la relacion con la tabla "tracks", osea, ya trae todo de una vez
                include: {
                    model: Tracks,
                    as: "tracks",
                }
            })
            
            if (!album) {
            return res.status(404).json({ error: "Álbum no encontrado" });
}

            return res.status(200).json(album)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}