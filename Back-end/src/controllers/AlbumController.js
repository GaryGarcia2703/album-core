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
}