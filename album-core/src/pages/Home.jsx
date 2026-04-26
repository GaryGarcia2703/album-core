import { useEffect, useState } from "react";

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/albums")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlbums(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>HOLAAAAAA</h1>

      <p>Total albums: {albums.length}</p>

      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.name}</h2>
          <h3>{album.year}</h3>
          <p>{album.artist}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;