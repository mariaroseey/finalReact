import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex  gap-4 p-5 bg-blue-950 text-white text-xl'>
        
        
      <Link to = {'/'} className='hover:text-lime-400'> Home </Link>
      <Link to = {'/about'} className='hover:text-lime-400'> About </Link>
    </div>
  )
}

export default Header