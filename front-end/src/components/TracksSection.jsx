import GetAlbumDetails from "../api/GetAlbumDetails"
import { useState, useEffect } from "react"
import { ListGroup, ListGroupItem, Button, Card } from "flowbite-react";
import { useParams } from "react-router-dom";
import { Play } from "flowbite-react-icons/solid";
import AlbumCover from "./AlbumCover";
import GetTrack from "../api/GetTrack";

function TracksSection({ onTrackSelect }) {
    console.log("onTrackSelect es:", typeof onTrackSelect)
    const { id } = useParams();

    // estado para guardar array de musicas
    const [album, setAlbum] = useState(null);
    useEffect(() => {
        GetAlbumDetails(id)
            .then((data) => setAlbum(data))

            .catch((error) => console.error(error));

    }, [id]);

    // logear para ver el array de los tracks

    // funcion para enviar datos de artista y nombre de la musica para encotrar la musica

    // track.name, album.artist, album.coverUrl, track.trackNumber, album.tracks
    async function handleTrackClick(trackName, artistName, coverUrl, actualTrack, Tracklist ) {
        // conseguir los 30 segundo de la musica
        const url = await GetTrack(trackName, artistName)
        console.log(`url de la musica ${url}`)


        // pasar props para albums details
        onTrackSelect({ 
            name: trackName,
            previewUrl: url, 
            artist: artistName, 
            cover: coverUrl, 
            actualTrack: actualTrack, 
            Tracklist: album.tracks 
        });


    }


    // crear animacio para el track que esta siendo predozudo 
    // 1 tomar el track.trackname y ver si es igual al trackname que esta en el player
    // O tomar el track.tracknumber este tambien tomando el album y compararlo con el album y el trackNumber del player 
    // esto en otro archivio
    // si es correcto mostrar un color diferente a inicio
    // si no tiene que recorrer a otro pero me imagino que no es nesesario



    if (!album) { // rendericacion condicional DESPUES COLOCAR UN COMPONENTE
        return <p>Cargando información del álbum...</p>; // evita el crash inicial
    }

    return (
        <div className="flex justify-center !bg-aero-panel-dark opacity-95">



            {/*header album */}

            <Card className="w-full bg-aero-glass">

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



                <ListGroup className="w-full !bg-aero-panel max-h-70 overflow-y-auto overflow-x-hidden">

                    { /* cargar datos de la tabla tracks atraves de la tabla albums*/}
                    {album.tracks.map((track) => {
                        return (
                            <ListGroupItem
                                // llamar funcion para obtener la url de la musica
                                onClick={() => {
                                    handleTrackClick(track.name, album.artist, album.coverUrl, track.trackNumber, album.tracks);

                                   // console.log("ID DEL TRACK ACTUAL " + track.trackNumber)
                                   // console.log("LISTA DE TRACKS " , album.tracks)
                                }}

                                key={track.id}
                                active
                                className="group transition-colors duration-150 hover:bg-aero-glass hover:scale-[1.01] border-none">

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