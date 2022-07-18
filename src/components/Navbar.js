import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className='m-7'>

   <div className='flex w-2/5 bg-slate-300 justify-center align-middle gap-3 m-auto rounded-md'>
    <li className='list-none text-lg p-5 rounder-md border-b-transparent cursor-pointer'>Breakfast</li>
    <li className='list-none text-lg p-5 rounder-md border-b-transparent cursor-pointer'>Lunch</li>
    <li className='list-none text-lg p-5 rounder-md border-b-transparent cursor-pointer'>Evening</li>
    <li className='list-none text-lg p-5 rounder-md border-b-transparent cursor-pointer'>Dinner</li>
    <li className='list-none text-lg p-5 rounder-md border-b-transparent cursor-pointer'>All</li>
   </div>
   </nav>
   </>
  )
}

export default Navbar