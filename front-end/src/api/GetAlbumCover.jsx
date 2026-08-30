import axios from "axios";

async function GetAlbumCover(albumName, artistName) {
  try {
    const res = await axios.get(`https://itunes.apple.com/search`, {
      params: {
        term: `${artistName} ${albumName}`,
        entity: "album",
        limit: 10, // 👈 pedimos varios candidatos, no solo 1
      },
    });

    const results = res.data.results;
    if (!results || results.length === 0) return null;

    // Buscamos el que coincida EXACTO en nombre de álbum y artista
    const exactMatch = results.find(
      (r) =>
        r.collectionName.toLowerCase() === albumName.toLowerCase() &&
        r.artistName.toLowerCase() === artistName.toLowerCase()
    );

    // Si no hay match exacto, buscamos al menos coincidencia parcial del nombre del álbum
    const partialMatch = results.find((r) =>
      r.collectionName.toLowerCase().includes(albumName.toLowerCase())
    );

    const chosen = exactMatch || partialMatch || results[0];

    return chosen.artworkUrl100.replace("100x100", "600x600");
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default GetAlbumCover;