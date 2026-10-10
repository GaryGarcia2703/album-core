// components/Player.jsx
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { Play, Pause, BackwardStep, ForwardStep } from "flowbite-react-icons/solid";
import GetAlbums from "../api/GetAlbums";
import { useState, useEffect } from "react";
import { Shuffle, ArrowsRepeat } from "flowbite-react-icons/outline";

function Player({ src, trackName, coverUrl, artist, onNext, onPrevious }) {
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    async function cargarAlbums() {
      try {
        const data = await GetAlbums();
        console.log(data);
        setAlbums(data);
      } catch (error) {
        console.log(error);
      }
    }

    cargarAlbums();
  }, []);

  const { audioRef, isPlaying, progress, duration, togglePlay, seek } = useAudioPlayer(src);

  if (!src) return null; // no muestra nada hasta que haya un track seleccionado

  return (
    <div className="flex rounded-aero shadow-aero-glow p-4 w-full bg-aero-button-dark opacity-95">
      <audio ref={audioRef} src={src} />

      <div id="coverIfo-inputsProgress" className="flex gap-20">
        <section id="name-artist-cover-info" className="flex flex-col gap-5">
          <div id="actualCover-conteiner" className="rounded-xl h-20 w-20">
            <img src={coverUrl} alt={trackName || "Cover"} className="rounded-xl object-cover h-full w-full" />
          </div>

          <div>
            <p className="text-white font-bold">{trackName}</p>
            <p className="text-white font-light">{artist}</p>
          </div>
        </section>

        <div id="inputs" className="flex flex-col">
          <div className="flex gap-2 items-center justify-center mt-2">
            <button className="group bg-aero-button-dark shadow-aero-glow rounded-l-lg w-10 h-10 flex items-center justify-center">
              <Shuffle className="text-aero-blue transition-colors group-hover:text-white" />
            </button>

            <button 
              onClick={onPrevious}
              className="group bg-aero-button-light shadow-aero-glow rounded-l-lg w-15 h-15 flex items-center justify-center"
            >
              <BackwardStep className="text-aero-blue transition-colors group-hover:text-white" />
            </button>

            <button
              onClick={togglePlay}
              className="group bg-aero-button-light shadow-aero-glow w-18 h-18 rounded-full p-2 flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="size-5 text-aero-blue transition-colors group-hover:text-white" />
              ) : (
                <Play className="size-5 text-aero-blue transition-colors group-hover:text-white" />
              )}
            </button>

            <button 
              onClick={onNext}
              className="group bg-aero-button-light shadow-aero-glow rounded-r-lg w-15 h-15 flex items-center justify-center"
            >
              <ForwardStep className="text-aero-blue transition-colors group-hover:text-white" />
            </button>

            <button className="group bg-aero-button-dark shadow-aero-glow rounded-r-lg w-10 h-10 flex items-center justify-center">
              <ArrowsRepeat className="text-aero-blue transition-colors group-hover:text-white" />
            </button>
          </div>

          <div
            className="mt-5 relative w-full h-2 bg-aero-panel-dark rounded-full cursor-pointer overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const percentage = clickX / rect.width;
              seek(percentage * duration);
            }}
          >
            {/* Barra de progreso */}
            <div
              className="h-full bg-aero-button-light transition-all duration-150"
              style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs text-aero-blue mt-1">
            {Math.floor(progress || 0)}s / {Math.floor(duration || 0)}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Player;