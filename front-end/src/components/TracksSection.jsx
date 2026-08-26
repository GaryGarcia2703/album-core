import GetAlbumDetails from "../api/GetAlbumDetails"
import { useState, useEffect } from "react"
import { ListGroup, ListGroupItem } from "flowbite-react";
import { useParams } from "react-router-dom";
import { Play } from "flowbite-react-icons/solid";

function TracksSection() {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    useEffect(() => {
        GetAlbumDetails(id)
            .then((data) => setAlbum(data))

            .catch((error) => console.error(error));

    }, [id]);

    if (!album) { // rendericacion condicional
        return <p>Cargando información del álbum...</p>; // evita el crash inicial
    }

    return (
        <div className="flex justify-center">
            <ListGroup className="w-100">

                { /* cargar datos de la tabla tracks atraves de la tabla albums*/}
                {album.tracks.map((track) => {
                    return (
                        <ListGroupItem key={track.id} active className="group transition-colors duration-150 hover:bg-neutral-800 hover:scale-[1.01]">

                            <p className="flex gap-10">
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

            
        </div>
    )
}

export default TracksSection