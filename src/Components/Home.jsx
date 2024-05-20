import React from 'react'
import logo from "../assets/logo.png"
import homeimg from "../assets/home.png"
import { RxVideo } from "react-icons/rx";
const Home = () => {
  return (
    <div className=' w-full  bg-gradient-to-r from-white/50  to-primary/10 lg:px-20 px-10  overflow-hidden'>

      <div className=' flex items-center lg:justify-start justify-center py-5'>
      <img src={logo} className=' lg:w-[4%] w-[10%]'/>
      <p className=' text-xl font-bold  uppercase text-black'>Trainner</p>
      
      </div>

      <div className='lg:flex  justify-between '>
        <div className=' basis-1/2 flex flex-col  lg:py-20 py-0'>
        <p className=' text-5xl lg:text-left text-center  py-3 lg:py-0 leading-tight uppercase font-extrabold'><span className=' text-primary'>Celebrate</span> what your body <span className=' text-primary'>can do.</span></p>
        <p className=' text-md   lg:text-left text-center lg:w-3/4 font-normal text-gray capitalize'>Exercise is more than calorie burn; it's honoring your body's power. Each workout celebrates your strength, agility, and resilience</p>
        
          <button className='  mt-6 cursor-pointer rounded-l-md bg-primary flex justify-center items-center lg:w-fit px-10 space-x-2 text-white py-2'>
          <RxVideo size={25}/>
          <p>Watch Video</p>
          </button>

      
        </div>
        <div className=' basis-1/2'>
        <img src={homeimg} className='  w-[100%] lg:w-[70%]'/>
        </div>

       
      </div>
    </div>
  )
}

export default Home