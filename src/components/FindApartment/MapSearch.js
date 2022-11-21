import React from 'react'
import { Map, Marker } from "pigeon-maps"
const MapSearch = () => {
  return (
    <div className='h-full overflow-hidden rounded-lg'>
        <Map height={700} defaultCenter={[6.430174, 3.418896]} defaultZoom={13}>
            <Marker width={50} anchor={[6.430174, 3.418896]} />
        </Map>
    </div>
  )
}

export default MapSearch