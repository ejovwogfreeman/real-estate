import React from 'react'

import SearchSideBar from '../components/FindApartment/SearchSideBar'
import car_image1 from '../images/Rectangle 71.png'
import car_image2 from '../images/Rectangle 78.png'
import car_image3 from '../images/Rectangle 78 (1).png'
import car_image4 from '../images/Rectangle 74.png'
import car_image5 from '../images/Rectangle 49.png'
import car_image6 from '../images/Rectangle 49 (1).png'
import MapSearch from '../components/FindApartment/MapSearch'

const FindApartment = () => {
  return (
    <div className='py-12 px-16 w-full h-screen bg-gradient-to-b from-teal-800 to-teal-600'>
        {/* container */}
        <div className='h-[90%] flex flex-row gap rounded-lg bg-white' >
            {/* map */}
            <div className='w-4/6 h-full'>
                <MapSearch/>
            </div>
            {/* locations */}
            <div className='w-2/6 h-full'>
                <SearchSideBar images={[
                    car_image1,
                    car_image2,
                    car_image3,
                    car_image4,
                    car_image5,
                    car_image6,
                ]}/>
            </div>
        </div>
    </div>
  )
}

export default FindApartment