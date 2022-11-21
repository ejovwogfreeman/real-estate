import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card2 = ({item}) => {
  const navigate = useNavigate()
  return (
    <li onClick={()=>navigate('/find-apartment')} className="cursor-pointer">
    <div className='relative rounded-xl overflow-hidden w-[350px] h-[350px]'>   
        <div className='w-full h-full absolute  contrast-[0.4]' style={{
            backgroundImage: `url("${item.image}")` , 
            backgroundSize: 'cover'}} ></div>
        <div className='w-full relative h-full z-10 flex flex-col justify-between py-3 px-3'>
            <span className='text-md font-extrabold text-white text-right'>Join Waitlist</span>
            <span className='text-3xl font-extrabold text-white'>{item.title}</span>
        </div>
    </div>
    </li>
  )
}

export default Card2