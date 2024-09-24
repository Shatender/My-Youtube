import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex ml-48 ' style={{ marginTop: '60px' }}>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default Body
