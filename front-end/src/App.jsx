import { useState } from 'react'
import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
import Player from './components/Player'
import GetTrack from './api/GetTrack'

import { Routes, Route } from "react-router-dom"

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  async function play(track) {
    if (!track) return
    const url = await GetTrack(track.name, currentTrack.artist)
    setCurrentTrack({ ...currentTrack, name: track.name, previewUrl: url, actualTrack: track.trackNumber })
  }

  const skip = step => {
    const list = currentTrack?.Tracklist
    const i = list?.findIndex(t => t.trackNumber === currentTrack.actualTrack)
    play(list?.[i + step])
  }

  const shuffle = (mode) => {
    if (!currentTrack) return
    const { Tracklist, actualTrack } = currentTrack

    if (mode === "off") {
      setCurrentTrack({ ...currentTrack, Tracklist: [...Tracklist].sort((a, b) => a.trackNumber - b.trackNumber) })
      return
    }

    const current = Tracklist.find(t => t.trackNumber === actualTrack)
    const rest = Tracklist.filter(t => t !== current).sort(() => Math.random() - 0.5)
    setCurrentTrack({ ...currentTrack, Tracklist: [current, ...rest] })
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/album/:id'
          element={
            <AlbumDetails

              onTrackSelect={setCurrentTrack}

              player={
                <Player
                  trackName={currentTrack?.name}
                  artist={currentTrack?.artist}
                  coverUrl={currentTrack?.cover}
                  src={currentTrack?.previewUrl}
                  onNext={() => skip(1)}
                  onPrev={() => skip(-1)}
                  onShuffle={shuffle}
                />
              }
            />
          }
        />
      </Routes>

    </>
  )
}

export default App