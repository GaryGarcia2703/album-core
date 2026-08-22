import { Album } from "./Album.js";
import { Tracks } from "./Tracks.js";

Album.hasMany(Tracks, {
    foreignKey: "albumId",
    as: "tracks",
});

Tracks.belongsTo(Album, {
    foreignKey: "albumId",
    as: "album",
});

export {
    Album,
    Tracks,
};