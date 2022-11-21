import React from 'react'
import ModalButton from './ModalButton'
import car_image6 from '../../../images/Rectangle 49 (1).png'

const WaitEmail = ({closeModal , openModal}) => {

  return (
    <div className='bg-white w-[700px] flex flex-col items-center rounded-lg shadow-lg py-8 px-6'>
        {/* <img src={car_image6} className="w-[300px] rounded-lg shadow-lg py-4 "/> */}
        <div className=' rounded-lg shadow-2xl w-[350px] h-[200px]' style={{
            backgroundImage: `url("${car_image6 }")` , 
            backgroundSize: 'cover'}} ></div>

        <p className='text-lg font-semibold pt-4 pb-2'>We have Officially received your reservation.</p>
        <p className='text-lg font-semibold pb-4 pt-2'>Recoa management will send you a <span className='font-extrabold'>confirmation
e-mail </span>shortly</p>

        <ModalButton onClick={(event) => {
                    event.stopPropagation(); openModal('join-form')}} className='px-5 py-4 text-xl w-4/6'>
            CONTINUE HOME SEARCH
        </ModalButton>
    </div>
  )
}

export default WaitEmail