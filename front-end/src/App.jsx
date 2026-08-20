import { useState } from 'react'
import Home from './pages/home'
import AlbumDetails from './pages/AlbumDetails'

{ /* importacion para usar react-routes */}
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}>
        </Route>
        
        <Route path='/album/:id' element={<AlbumDetails />}>

        </Route>
      </Routes>

      { /*crear una pagina solamente para esto mas tarde */}
      <nav>
        <Link to="/home">Home</Link> |{" "}
      </nav>
    </>
  )
}

export default App
