// components/Player.jsx
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { Play, Pause, BackwardStep, ForwardStep, } from "flowbite-react-icons/solid"; // confirmá "Pause" contra tu index.d.ts
import GetAlbums from "../api/GetAlbums";
import { useState, useEffect } from "react";
import { Shuffle, ArrowsRepeat } from "flowbite-react-icons/outline";

function Player({ src, trackName, coverUrl, artist  }) { // recibe la url de la capa tambien

  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    async function cargarlbums() {
      try {
        const data = await GetAlbums();
        console.log(data);
        setAlbums(data);
      } catch (error) {
        console.log(error);
      }
    }

    cargarlbums();
  }, []);

  const { audioRef, isPlaying, progress, duration, togglePlay, seek, } = useAudioPlayer(src);

  if (!src) return null; // no muestra nada hasta que haya un track seleccionado

  return (
    <div className="flex rounded-aero shadow-aero-glow p-4 w-full bg-aero-button-dark opacity-95">
      <audio ref={audioRef} src={src} />

      <section id="column" className="flex flex-col w-full">

        <p className="text-aero-blue font-bold">{trackName}</p>

        <p className="text-aero-blue font-bold">{artist}</p>

        <div id="actualCover-conteiner" className="rounded-xl h-10 w-10">
          <img src={coverUrl} alt="" className="rounded-xl" />
        </div>

        <div className="flex gap-2 items-center  justify-center mt-2 group-hover:">

          <button className="group bg-aero-button-dark shadow-aero-glow rounded-l-lg w-10 h-10 flex items-center justify-center ">
            <Shuffle className="text-aero-blue transition-colors group-hover:text-white"></Shuffle>
          </button>

          <button className="group bg-aero-button-light shadow-aero-glow rounded-l-lg w-15 h-15 flex items-center justify-center">
            <BackwardStep className="text-aero-blue transition-colors group-hover:text-white"></BackwardStep>
          </button>

          <button
            onClick={togglePlay}
            className="group bg-aero-button-light shadow-aero-glow w-18 h-18 rounded-full p-2 flex items-center justify-center"
          >
            {isPlaying ? <Pause className="size-5 text-aero-blue transition-colors group-hover:text-white" /> //  esta reproduciendo
              : <Play className="size-5 text-aero-blue transition-colors group-hover:text-white" />}
          </button>

          <button className="group bg-aero-button-light shadow-aero-glow rounded-r-lg w-15 h-15 flex items-center justify-center">
            <ForwardStep className="text-aero-blue transition-colors group-hover:text-white"></ForwardStep>
          </button>

          <button className="group bg-aero-button-dark shadow-aero-glow rounded-r-lg w-10 h-10 flex items-center justify-center">
            <ArrowsRepeat className="text-aero-blue transition-colors group-hover:text-white"></ArrowsRepeat>
          </button>
         
        </div>
 <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={(e) => seek(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs">
            {Math.floor(progress)}s / {Math.floor(duration)}s
          </span>
      </section>

    </div>
  );
}

export default Player;