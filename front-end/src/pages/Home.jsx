import { useEffect, useState } from "react";
import Menusidebar from "../components/Menusidebar";
import Player from "../components/Player";



function Home() {
  return (
    <div>
      <Menusidebar/>
      <Player></Player>
      
    </div>
    
  )
}

export default Home;