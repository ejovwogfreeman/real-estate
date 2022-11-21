import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card1 = ({item}) => {
  const navigate = useNavigate()
  return (
    <li onClick={()=>navigate('/find-apartment')} className="cursor-pointer">
    <div className='relative rounded-xl overflow-hidden w-[300px] h-[350px]'>   
        <div className='w-full h-full absolute  contrast-[0.4]' style={{
            backgroundImage: `url("${item?.image}")` , 
            backgroundSize: 'cover'}} ></div>
        <div className='w-full relative h-full z-10 flex justify-center items-center'>
            <span className='text-3xl font-extrabold w-3/4 text-center text-white'>{item.title}</span>
        </div>
    </div>
    </li>
  )
}

export default Card1