import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
    <div className="flex gap-[150px] ">
    <Navbar/>
    <Outlet/>
    </div>
  </>
  )
}

export default LayoutOne