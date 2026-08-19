"use client";
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
    cargarlbums
  }, [])



  return (
    <Sidebar className="w-60" aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup className="space-y-10">
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            {Albums.name}
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
export default Menusidebar