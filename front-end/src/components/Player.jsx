// components/Player.jsx
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { Play, Pause } from "flowbite-react-icons/solid"; // confirmá "Pause" contra tu index.d.ts

function Player({ src, trackName }) {
  const { audioRef, isPlaying, progress, duration, togglePlay, seek } = useAudioPlayer(src);

  if (!src) return null; // no muestra nada hasta que haya un track seleccionado

  return (
    <div className="relative bg-aero-panel rounded-aero shadow-aero-glow p-4">
      <audio ref={audioRef} src={src} />

      <p className="text-aero-blue font-semibold">{trackName}</p>

      <div className="flex items-center gap-4 mt-2">
        <button onClick={togglePlay} className="bg-aero-button rounded-full p-2">
          {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
        </button>

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
      </div>
    </div>
  );
}

export default Player;