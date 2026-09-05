import GetAlbumDetails from "../api/GetAlbumDetails";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menusidebar from "../components/Menusidebar";
import TracksSection from "../components/TracksSection";
import TestAero from "../components/TestAero";
import Player from "../components/Player";
import SyncAlbumCover from "../components/SyncAlbumCover";
function AlbumDetails() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    GetAlbumDetails(id)
      .then((data) => setAlbum(data))
      .catch((error) => console.error(error));
  }, [id]); // ✅ evita loop infinito, y recarga si cambia el id

  console.log(album)

  if (!album) { // rendericacion condicional
    return <p>Cargando información del álbum...</p>; // evita el crash inicial
  }

  return (
    <div className="flex flex-row gap-50">

      <Menusidebar />

      <section id="album-plus-tracks-section" className="flex flex-col w-100 gap-1">
        <TracksSection
          onTrackSelect={setCurrentTrack} // TracksSection avisa cuál track se eligió
        />

        <Player
          src={currentTrack?.previewUrl}
          trackName={currentTrack?.name}
        />

        <TestAero />

        <SyncAlbumCover album={album} />
      </section>

    </div>
  );
}

export default AlbumDetails;