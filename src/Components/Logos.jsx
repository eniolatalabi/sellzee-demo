import React from 'react'
import fedex1 from '../assets/fedex1.png'
import fedex2 from '../assets/fedex2.png'
import microsoft from '../assets/new-Microsoft-logo-removebg-preview 1.png'
import google from '../assets/google-1-removebg-preview 1.png'
import ola from '../assets/ola.png'
import walmart from '../assets/walmart.png'
import amazon from '../assets/amazon1.png'


const Logos = () => {
  return (
    <div className='flex flex-col pt-20 gap-7 items-center justify-center'>
        <div className='flex gap-10 items-center'>
            <div className='w-[220px] h-[70px] bg-white shadow-2xl grid place-content-center'><img src={fedex1} alt="" /></div>
            <div className='w-[220px] h-[70px]  bg-white shadow-2xl grid place-content-center'><img src={google} alt="" /></div>
            <div className='w-[220px] h-[70px]  bg-white shadow-2xl grid place-content-center'><img src={ola} alt="" /></div>
            <div className='w-[220px] h-[70px]  bg-white shadow-xl grid place-content-center'><img src={microsoft} alt="" /></div>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='w-[220px] h-[70px]  bg-white shadow-2xl grid place-content-center'><img src={amazon} alt="" /></div>
            <div className='w-[220px] h-[70px]  bg-white shadow-2xl grid place-content-center'><img src={fedex2} alt="" /></div>
            <div className='w-[220px] h-[70px]  bg-white shadow-2xl grid place-content-center'><img src={walmart} alt="" /></div>
        </div>
    </div>
  )
}

export default Logos