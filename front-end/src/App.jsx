import { useState } from 'react'
import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
import Player from './components/Player'
import GetTrack from './api/GetTrack'

import { Routes, Route } from "react-router-dom"

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  async function skip(step) {
    const next = currentTrack?.Tracklist.find(t => t.trackNumber === currentTrack.actualTrack + step)
    if (!next) return
    const url = await GetTrack(next.name, currentTrack.artist)
    setCurrentTrack({ ...currentTrack, name: next.name, previewUrl: url, actualTrack: next.trackNumber })
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