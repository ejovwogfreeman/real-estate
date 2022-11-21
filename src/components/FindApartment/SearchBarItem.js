import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBarItem = ({item}) => {
  const navigate = useNavigate()
  return (
    <li onClick={()=>navigate('/login')} className="cursor-pointer">
      <div className='flex flex-row mt-6 rounded-lg bg-green-100'>
        <div className='w-1/3 rounded-lg' style={{
            backgroundImage: `url("${item}")` , 
            backgroundSize: 'cover'}} >
        </div>
        <div className=' pl-3 my-3'>
          <p className='text-green-600 font-bold text-lg'>Recoa Square</p>
          <p>Victoria Island</p>

          <ul className='text-xs mt-2 font-bold list-disc ml-3'>
            <li>425  units</li>
            <li>$7,500 / annum</li>
            <li>June 2024</li>
          </ul>

        </div>
      </div>
    </li>
  )
}

export default SearchBarItem