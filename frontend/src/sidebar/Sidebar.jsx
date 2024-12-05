import React from 'react'
import { cn } from "@/lib/utils";
import Create from './Create'
import SideBarCalendar from './SideBarCalendar'
import SearchUsers from './SearchUsers'

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "w-92 hidden border-t px-2 py-3 transition-all duration-300 ease-in-out lg:block"
      )}
    >
        <Create/>
        <SideBarCalendar/>
        <SearchUsers/>
    </aside>

  )
}

export default Sidebar