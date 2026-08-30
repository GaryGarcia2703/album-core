import { useEffect, useState } from "react";
import GetAlbumCover from "../api/GetAlbumCover";

function AlbumCover({ albumName, artistName }) {
  const [cover, setCover] = useState(null);

  useEffect(() => {
    GetAlbumCover(albumName, artistName).then((url) => setCover(url));
  }, [albumName, artistName]);

  if (!cover) return <p>Buscando carátula...</p>;

  return <img src={cover} alt="Carátula" className="w-64 rounded-aero shadow-aero-glow" />;
}

export default AlbumCover;