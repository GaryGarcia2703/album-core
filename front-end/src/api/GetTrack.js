import axios from "axios";

async function GetTrack(trackName, artistName) {
    try {
        // paso 1: buscar musica
        const TrackUrl = await axios.get(`https://itunes.apple.com/search`, {
            params: {
                term: `${artistName} ${trackName}`,
                entity: "song",
                limit: 5,
            }
        })

        // no encontro nada
        const results = TrackUrl.data.results;
        if (!results || results.length === 0) return null;


        // filtro para aplicar encima de la musica
        const exactMatch = results.find(
            (r) =>
                r.trackName?.toLowerCase() === trackName.toLowerCase() &&
                r.artistName?.toLowerCase() === artistName.toLowerCase()
        );

        // sub-filtro para el artista
        const partialArtist = results.find((t) =>  
            t.artistName?.toLowerCase().includes(artistName.toLowerCase())
        )


        // si no hay match exacto en el track, buscar coincidencia partial  (por si tiene "(Remastered)" u otro sufijo)
        const partialtrack = results.find((a) => 
            a.trackName?.toLowerCase().includes(trackName.toLowerCase())
        )

        // si la musica del filtro es igual a la musica de la busqueda
        const chosen = exactMatch || partialArtist || partialtrack
        console.log(chosen)
        return chosen.previewUrl;

    } catch (error) {
        console.log(error);
        return null;
    }

}

export default GetTrack