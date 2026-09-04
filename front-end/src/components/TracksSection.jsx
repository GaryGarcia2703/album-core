import GetAlbumDetails from "../api/GetAlbumDetails"
import { useState, useEffect } from "react"
import { ListGroup, ListGroupItem, Button, Card } from "flowbite-react";
import { useParams } from "react-router-dom";
import { Play } from "flowbite-react-icons/solid";
import AlbumCover from "./AlbumCover";
import GetTrack from "../api/GetTrack";

function TracksSection() {
    const { id } = useParams();

    // estado para guardar la url de la musica
    const [previewUrl, setPreviewUrl] = useState(null)

    // estado para guardar array de musicas
    const [album, setAlbum] = useState(null);
    useEffect(() => {
        GetAlbumDetails(id)
            .then((data) => setAlbum(data))

            .catch((error) => console.error(error));

    }, [id]);

    // funcion para enviar datos de artista y nombre de la musica para encotrar la musica

    async function handleTrackClick(trackName, artistName) {
        const url = await GetTrack(trackName, trackName)
        console.log(`url de la musica ${url}`)
        setPreviewUrl(url)
    }

    if (!album) { // rendericacion condicional
        return <p>Cargando información del álbum...</p>; // evita el crash inicial
    }

    return (
        <div className="flex justify-center">



            {/*header album */}

            <Card className="w-100">

                {/*ALBUM COVER */}
                <AlbumCover
                    albumName={album.name}
                    artistName={album.artist}
                />

                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    {album.name}
                </h5>

                <h6 className="font-light text-white">
                    {album.artist} - {album.year}
                </h6>



                <ListGroup className="w-100">

                    { /* cargar datos de la tabla tracks atraves de la tabla albums*/}
                    {album.tracks.map((track) => {
                        return (
                            <ListGroupItem
                                // llamar funcion para obtener la url de la musica
                                onClick={() => handleTrackClick(track.name, album.artist)}
                                key={track.id}
                                active
                                className="group transition-colors duration-150 hover:bg-neutral-800 hover:scale-[1.01] border-none">

                                <p className="flex items-center gap-10 h-10">
                                    {/* icono que no aparecerá hasta hacer el hover GROUP-HOVER*/}
                                    <span className="relative inline-block w-4 h-4">

                                        {/* Número: visible por defecto, se apaga con el hover */}
                                        <span className="group-hover:opacity-0 transition-opacity duration-150 absolute inset-0 flex items-center justify-center">
                                            {track.trackNumber}
                                        </span>

                                        {/* Ícono: oculto por defecto, aparece con el hover, EN EL MISMO LUGAR */}
                                        <Play className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute inset-0 w-5 h-5" />
                                    </span>

                                    <span>{track.name}</span>
                                </p>
                            </ListGroupItem>
                        )
                    })}


                </ListGroup>
            </Card>




        </div>
    )
}

export default TracksSection