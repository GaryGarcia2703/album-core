import { Album } from "../models/Album.js";

export class AlbumController {
    static showAlbums = async (req, res) => {
        const albums = await Album.findAll();
        res.json(albums);
    };
}