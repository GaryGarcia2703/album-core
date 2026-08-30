"use client";
import Saludo from "../api/GetHour";
import { Link } from "react-router-dom";
import GetAlbums from "../api/GetAlbums";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useEffect, useState } from "react";
import logo from "../../public/img/music-ico.png";
import AlbumIcon from "./AlbumIcon";   

export function Menusidebar() {
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    async function cargarlbums() {
      try {
        const data = await GetAlbums();
        console.log(data);
        setAlbums(data);
      } catch (error) {
        console.log(error);
      }
    }

    cargarlbums();
  }, []);

  return (
    <Sidebar className="w-120" aria-label="Default sidebar example">
      <SidebarItems>
        <img src={logo} alt="" className="w-11 h-11" />

        <SidebarItemGroup>
          <Saludo />
        </SidebarItemGroup>

        <SidebarItemGroup className="space-y-10">
          {Albums.map((album) => (
            <SidebarItem
              key={album.id}
              as={Link}
              to={`/album/${album.id}`}
              icon={() => <AlbumIcon coverUrl={album.coverUrl} />}
            >
              {album.name}
              <p className="text-xs">{album.artist}</p>
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
export default Menusidebar;