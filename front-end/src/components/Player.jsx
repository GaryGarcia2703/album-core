// components/Player.jsx
import { useAudioPlayer } from "../hooks/useAudioPlayer";

function Player({ src, trackName }) {
  const { audioRef, isPlaying, progress, duration, togglePlay, seek } = useAudioPlayer(src);

  return (
    <div>
      <audio ref={audioRef} src={src} />

      <p>{trackName}</p>

      <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={progress}
        onChange={(e) => seek(Number(e.target.value))}
      />

      <span>{Math.floor(progress)}s / {Math.floor(duration)}s</span>
    </div>
  );
}

export default Player;