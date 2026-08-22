"use client";
import { Link } from "react-router-dom";
import GetAlbums from "../api/GetAlbums";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { use, useEffect, useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function Menusidebar() {

  const [Albums, setAlbums] = useState([])

  useEffect(() => {
    async function cargarlbums() {
      try {
        const data = await GetAlbums()
        console.log(data)
        setAlbums(data)

      } catch (error) {
        error
      }
    }

    //llamada de la funcion
    cargarlbums()
  }, [])



  return (


    <Sidebar className="w-120" aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup className="space-y-10">

          {Albums.map((album) => (
            <SidebarItem
              key={album.id}
              as={Link}
              to={`/album/${album.id}`}
              icon={HiTable}
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
export default Menusidebar