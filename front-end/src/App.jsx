import { useState } from 'react'
import Home from './pages/home'
import AlbumDetails from './pages/AlbumDetails'
import Player from './components/Player'

import { Routes, Route } from "react-router-dom"

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/album/:id'
          element={<AlbumDetails onTrackSelect={setCurrentTrack} />}
        />
      </Routes>

      <Player
        src={currentTrack?.previewUrl}
        trackName={currentTrack?.name}
        coverUrl={currentTrack?.coverUrl}
        artist={currentTrack?.artist}
      />
    </>
  )
}

export default App