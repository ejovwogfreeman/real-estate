import React from 'react'
import SearchBarItem from './SearchBarItem'

const SearchSideBar = ({images}) => {
  return (
    
    <ul className='h-full overflow-y-scroll pt-3 pb-5 px-4'>
        { images.map((item,index)=><SearchBarItem item={item} key={index}/>)}
    </ul>
    
  )
}

export default SearchSideBar