import axios from "axios";

async function GetTrack(trackName, artistName) {
    try {
        // paso 1 buscar el artista para conseguir el id
        const artistId = await axios.get(`https://itunes.apple.com/search`, {
            params: {
                term: artistName,
                entity: "musicArtist",
                limit: 1,
            }
        })

        const artist = artistId.data.results[0];
        if (!artist) return null; // no encontró el artista

        // paso 2: buscar musica
        const TrackUrl = await axios.get(`https://itunes.apple.com/search`, {
            params: {
                term: `${artistName} ${trackName}`,
                entity: "song",
                limit: 5,
            }
        })

        const results = res.data.results;
        if (!results || results.length === 0) return null;


        const exactMatch = results.find(
            (r) =>
                r.trackName?.toLowerCase() === trackName.toLowerCase() &&
                r.artistName?.toLowerCase() === artistName.toLowerCase()
        );


        const chosen = exactMatch || results[0];
        console.log(previewUrl)
        return chosen.previewUrl;

    } catch (error) {
        console.log(error);
        return null;
    }

}

export default GetTrack