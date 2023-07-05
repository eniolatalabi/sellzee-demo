import React from 'react'
import Nav from './Nav'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div className='w-scrren h-[60vh] bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96]'>
        <Nav/>
        <HeaderContent/>
    </div>
  )
}

export default Header