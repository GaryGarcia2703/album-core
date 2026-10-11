// hooks/useAudioPlayer.js
import { useRef, useState, useEffect } from "react";
import TracksSection from "../components/TracksSection";

export function useAudioPlayer(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    const audio = audioRef.current;
    console.log(audioRef)
    if (!audio || !src) return;

    const updateProgress = () => setProgress(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    //  NUEVO: cuando cambia src, recargar y reproducir automáticamente
    audio.load();
    audio.play();
    setIsPlaying(true);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [src]);

  

  const [tracks, setTracks] = useState([]);        // lista de canciones
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTrack = () => setCurrentIndex((i) => (i + 1) % tracks.length);
  const prevTrack = () => setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length);

  const current = tracks[currentIndex];
  

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (time) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setProgress(time);
  };

  return { audioRef, isPlaying, progress, duration, togglePlay, seek };
}