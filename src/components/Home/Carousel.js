import React from 'react'

const Carousel = ({Card , items}) => {
  return (
    <div className='relative w-full'>
        <div className='absolute top-[45%] z-20 py-5 px-1 bg-teal-600 rounded-lg left-0'>
            <span className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
        </div>
        <ul className='flex overflow-x-scroll gap-3 relative'>
            {items.map((item , index) => <Card key={index} item={item}/>)}
        </ul>
        <div className='absolute top-[45%] z-20 py-5 px-1 bg-teal-600 rounded-lg right-0'>
            <span className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
    </div>
    
    
  )
}

export default Carousel