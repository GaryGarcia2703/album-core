import { useEffect } from "react";
import GetAlbumCover from "../api/GetAlbumCover";
import UpdateAlbumCover from "../api/UpdateAlbumCover";

function SyncAlbumCover({ album }) {
  useEffect(() => {
    // Solo buscar si el álbum TODAVÍA no tiene carátula guardada
    if (album.coverUrl) return;

    GetAlbumCover(album.name, album.artist).then((url) => {
      if (url) {
        UpdateAlbumCover(album.id, url);
      }
    });
  }, [album]);

  return null; // este componente no renderiza nada visual, solo ejecuta la lógica
}

export default SyncAlbumCover;