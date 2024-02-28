import React from 'react'
import Header from './assets/component/Header'
import Footer from './assets/component/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default layout
