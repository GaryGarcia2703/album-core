import { useState } from 'react'
import Home from './pages/home'
{ /* importacion para usar react-routes */}
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        
      </Routes>

      <nav>
        <Link to="/home">Home</Link> |{" "}
      </nav>
    </>
  )
}

export default App
