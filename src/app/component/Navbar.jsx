'use client'
import {useState} from 'react'

export default function Navbar() {
 const [theme, setTheme] = useState('light')
  return (
    <nav className='h-20 bg-[#373B53] w-full flex justify-between'>
      <div className='bg-[#7C5DFA] flex items-center w-1/5 justify-center rounded-e-2xl'>
        <img src='/assets/logo.svg'  />
      </div>
      <div className='flex items-center pr-10'>
        {
            theme == 'light'
            ?
            <span className='cursor-pointer' onClick={() => setTheme('dark')}><img className='' src='/assets/icon-sun.svg' /></span>
            :
            <span className='cursor-pointer' onClick={() => setTheme('light')}><img src='/assets/icon-moon.svg' /></span>
        }
      </div>
    </nav>
  )
}
