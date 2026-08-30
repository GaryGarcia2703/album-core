import axios from "axios";

async function GetAlbumCover(albumName, artistName) {
  try {
    const res = await axios.get(`https://itunes.apple.com/search`, {
      params: {
        term: `${artistName} ${albumName}`, // 👈 combinás ambos
        entity: "album",
        limit: 1,
      },
    });

    const result = res.data.results[0];
    if (!result) return null;

    return result.artworkUrl100.replace("100x100", "600x600");
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default GetAlbumCover;