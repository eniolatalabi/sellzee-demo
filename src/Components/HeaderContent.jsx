import React from 'react'
import tabview from '../assets/tableview.png'

const HeaderContent = () => {
  return (
    <div className='w-screen h-[100%] flex justify-around align-middle items-center'>
        <div className='w-[20%] h-[70%] flex flex-col justify-around items-start gap-3'>
            <div>
                <h2 className='text-white font-serif'>INSPIRATION TECHNOLOGY</h2>
                <h1 className='text-white font-bold text-5xl'>Runs faster.</h1>
                <h2 className='text-white text-4xl font-semibold'>Costs less and <br /> never breaks.</h2>
            </div>
            <div className='w-full h-[1px] bg-[#ffffff]'></div>
            <div>
            <h6 className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat.
            </h6>
            </div>
            <div className='flex gap-4 w-full'> 
                <button className='text-white bg-orange-600 w-28 h-8 rounded-r-2xl'>GET STARTED</button>
                <button className='bg-inherit text-white border-[#ffffff] border-[1px] w-28 rounded-l-2xl'>FREE TRIAL</button>
            </div>
        </div>
    <img src={tabview}  className='w-[30%] h-[70%]' alt="" />
    </div>
  )
}

export default HeaderContent