import React from 'react'
import Logo from '../assets/sellzee-logo.png'

const Nav = () => {
  return (
    <div className='flex justify-evenly items-center '>

            <img src={Logo} alt="" />
            <ul className='flex gap-7 text-white font-semibold'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>TESTIMONIAL</li>
                <li>PRICING</li>
            </ul>
                <button className='text-white bg-orange-600 w-32 h-8 rounded-r-2xl'>GET STARTED</button>
    </div>
  )
}

export default Nav