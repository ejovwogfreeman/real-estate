import React from 'react'
import { GridItemFind } from '../GridItemFind'
import ModalButton from './ModalButton'

import car_image1 from '../../../images/Rectangle 66.jpg'

export const ReserveForm = ({closeModal , openModal}) => {
  return (
    <div className='flex flex-row items-center'>
        <div>
            <GridItemFind className="scale-75" item={car_image1}/>
        </div>
        <div>
            <form className='bg-white py-5 px-3 rounded-lg shadow-lg'>
                <div className='text-center text-2xl text-emerald-800 font-extrabold'>Reserve</div>
                <div className='flex flex-row gap-2 justify-center my-4'>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3' name='' type='text' placeholder='First name'/>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3' name='' type='text' placeholder='Last name'/>
                </div>

                <div className='flex flex-row gap-2 justify-center my-4'>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3' name='' type='text' placeholder='Telephone'/>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3' name='' type='text' placeholder='Organization'/>
                </div>

                <div className='flex flex-row gap-2 justify-center my-4'>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3' name='' type='text' placeholder='Email'/>
                </div>

                <div className='flex flex-row gap-2 justify-center my-4'>
                    <input className='bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3 w-full' name='' type='text' placeholder='Unit type' />
                </div>

                <ModalButton onClick={(event) => {
                    event.stopPropagation(); openModal('wait-email')}} className='px-5 py-4 text-xl w-full uppercase' type="button">
                     Reserve
                </ModalButton>
            </form>
        </div>
    </div>
  )
}
