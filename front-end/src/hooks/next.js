import GetAlbumDetails from "../api/GetAlbumDetails";

function next() {
    const [album, setAlbum] = useState(null);
    useEffect(() => {
        GetAlbumDetails(id)
            .then((data) => setAlbum(data))

            .catch((error) => console.error(error));

    }, [id]);

    const current = tracks[index];

    const nextTrack = () => setIndex((i) => (i + 1) % tracks.length);

    const previousTrack = () => setIndex((i) => (i - 1 + tracks.length) % tracks.length);
}

export default next;