import React from 'react'
import Navbar from '../component/Navbar'

export default function layout({children}) {
  return (
    <div className='bg-[#F8F8FB] overflow-x-hidden min-h-screen sm:h-screen w-screen sm:flex'>
      <Navbar />
      {children}
    </div>
  )
}
