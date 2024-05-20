import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TbArrowGuide } from "react-icons/tb";
import Footer from './Footer';
const ExcersiseList = () => {
  const {id} = useParams()
  const [data,setData] = useState([])
  const [instructions,setinstructions] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5f964935dmsh5698ec9c2cef439p12e0e8jsna6d7c33301eb',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(()=>{

    const fetchData = async(id,options)=>{
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,options)
        const data = await response.json()
        setData(data)
        setinstructions(data.instructions)
    }

    fetchData(id,options)
  },[])

  

  return (
   <div>
     <div className='     lg:flex  lg:justify-center    space-x-5 py-0 lg:pt-20 items-center lg:px-20 px-5 mt-5 lg:mt-0'>
      <div className=' lg:basis-1/2  flex  flex-col items-center'>
          <img src={data.gifUrl}/>
          <p className=' text-2xl font-bold  capitalize'>{data.name}</p>
          <p className=' bg-primary w-fit px-4 py-2 text-white mt-5 rounded-2xl capitalize'>Target : {data.target}</p>
      </div>
      <div className=' lg:basis-1/2 mt-10 lg:mt-0'>
        <div>
          <p className=' text-4xl uppercase font-bold text-black '>instructions</p>
          {
            instructions.map((item)=>(
              <div className=' flex items-center space-x-4 mt-5'>
                <div className=' bg-primary p-3  text-white rounded-full'>
                <TbArrowGuide/>
                </div>
                <p className=' text-gray text-lg '>{item}</p>
               </div> 
            ))
          }
        </div>
      </div>
      
    </div>
   <div className=' lg:fixed lg:bottom-0 w-full mt-5'>
   <Footer/>
   </div>
   </div>
  )
}

export default ExcersiseList