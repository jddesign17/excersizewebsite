import React from 'react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className=' w-full bg-primary/10 py-2 fixed bottom-0'>

        <div className=' flex justify-center flex-col items-center'>
        <div className=' flex justify-center items-center'>
        <img src={logo} className=' w-[3%]'/>
        <p className=' text-md uppercase'>Trannier</p>
        </div>

        
        <p>&copy;Trannier</p>
        </div>
    </div>
  )
}

export default Footer