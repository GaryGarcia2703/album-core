import { useState } from 'react'
import Home from './pages/home'
import AlbumDetails from './pages/AlbumDetails'

{ /* importacion para usar react-routes */}
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        
        <Route path='/album/:id' element={<AlbumDetails />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
