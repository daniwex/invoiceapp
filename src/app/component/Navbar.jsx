'use client'
import {useState} from 'react'

export default function Navbar() {
 const [theme, setTheme] = useState('light')
  return (
    <nav className='h-20 bg-[#373B53] w-full flex justify-between sm:min-h-screen sm:flex-col sm:w-[5%]'>
      <div className='bg-[#7C5DFA] flex sm:w-full sm:h-[10%] sm:rounded-e-lg items-center w-1/5 justify-center rounded-e-2xl'>
        <img src='/assets/logo.svg'  />
      </div>
      <div className='flex items-center pr-10 sm:pr-0 sm:justify-center sm:py-5'>
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
