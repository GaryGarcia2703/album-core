import axios from "axios";

async function GetAlbumCover(albumName, artistName) {
  try {
    // Paso 1: buscar el artista para conseguir su ID exacto
    const artistRes = await axios.get(`https://itunes.apple.com/search`, {
      params: {
        term: artistName,
        entity: "musicArtist",
        limit: 1,
      },
    });

    const artist = artistRes.data.results[0];
    if (!artist) return null; // no encontró el artista

    // Paso 2: buscar los álbumes de ESE artista específico
    const albumsRes = await axios.get(`https://itunes.apple.com/lookup`, {
      params: {
        id: artist.artistId,
        entity: "album",
      },
    });

    const albums = albumsRes.data.results;

    // Filtrar por coincidencia exacta de nombre de álbum
    const exactMatch = albums.find(
      (a) => a.collectionName?.toLowerCase() === albumName.toLowerCase()
    );

    // Si no hay match exacto, buscar coincidencia parcial (por si tiene "(Remastered)" u otro sufijo)
    const partialMatch = albums.find((a) =>
      a.collectionName?.toLowerCase().includes(albumName.toLowerCase())
    );

    const chosen = exactMatch || partialMatch;
    if (!chosen) return null;

    return chosen.artworkUrl100.replace("100x100", "600x600");
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default GetAlbumCover;