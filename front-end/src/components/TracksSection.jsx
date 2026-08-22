import GetAlbumDetails from "../api/GetAlbumDetails"
import { useState, useEffect } from "react"
import { ListGroup, ListGroupItem } from "flowbite-react";
import { useParams } from "react-router-dom";

function TracksSection () { 
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

                { /* cargar datos de la tabla tracks atraves de la tabla albums*/ }
                {album.tracks.map((track) => {
                    return (
                        <ListGroupItem key={track.id} active>
                        <p className="flex gap-10">
                            <span>{track.trackNumber}</span>
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