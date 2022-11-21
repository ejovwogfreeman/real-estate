import React from 'react'
import ModalButton from './ModalButton'
import car_image6 from '../../../images/Rectangle 69 (3).jpg'


function WaitList({closeModal , openModal}) {
    return (
        <div className='bg-white w-[700px] flex flex-col items-center rounded-lg shadow-lg py-8 px-6'>
            {/* <img src={car_image6} className="w-[300px] rounded-lg shadow-lg py-4 "/> */}
            <div className=' rounded-lg shadow-2xl w-[350px] h-[200px]' style={{
                backgroundImage: `url("${car_image6 }")` , 
                backgroundSize: 'cover'}} ></div>
    
            <p className='text-lg font-semibold pt-4 pb-2'>You are officially on the Recoa Waitlist</p>
            <p className='text-lg font-semibold pb-4 pt-2'>Recoa search team will reach out once we find
    the perfect residence for you.</p>
    
            <ModalButton onClick={(event) => {
                    event.stopPropagation(); closeModal()}} className='px-5 py-4 text-xl w-4/6'>
                CONTINUE HOME SEARCH
            </ModalButton>
        </div>
      )
}

export default WaitList