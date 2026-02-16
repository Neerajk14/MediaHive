import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
       <div className="flex justify-between items-center  py-6 px-10 bg-(--c2)  ">
        <Link to="/" className="font-medium text-2xl ">Mediaorbit</Link>
      <div className="flex gap-5 text-xl items-center ">
         <Link className='text-base font-medium bg-(--c4) active:scale-95 text-(--c1) rounded px-4 py-2 ' to='/' >Search</Link>
         <Link className='text-base  font-medium bg-(--c4) active:scale-95 text-(--c1) rounded px-4 py-2' to='/collection' >Collection</Link>
      </div>
      </div>
  )
}

export default Navbar
