import GetAlbumDetails from "../api/GetAlbumDetails";
import { Card } from "flowbite-react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menusidebar from "../components/Menusidebar";
import TracksSection from "../components/TracksSection";

function AlbumDetails() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    GetAlbumDetails(id)
      .then((data) => setAlbum(data))
      .catch((error) => console.error(error));
  }, [id]); // ✅ evita loop infinito, y recarga si cambia el id

  if (!album) { // rendericacion condicional
    return <p>Cargando información del álbum...</p>; // evita el crash inicial
  }

  return (
    <div className="flex flex-row gap-1">

      <Menusidebar/>
      
      <section id="album-plus-tracks-section" className="flex flex-col w-100 gap-1">
        <Card
          className=" w-full"
          imgAlt=""
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {album.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {album.year}
          </p>
          <p>{album.artist}</p>
        </Card>

        <TracksSection/>
      </section>
  
    </div>
  );
}

export default AlbumDetails;