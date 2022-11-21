import React from 'react'

const ModalButton = ({children , onClick , className , type}) => {
  return (
    <button type={type} onClick={(event)=>onClick(event)} className={`bg-green-900 py-1 ${className} text-white rounded-lg font-bold `}>
        {children}
    </button>
  )
}

export default ModalButton