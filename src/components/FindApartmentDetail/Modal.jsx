import React from 'react'
import JoinListForm from './ModalSections/JoinListForm'
import { ReserveForm } from './ModalSections/ReserveForm'
import WaitEmail from './ModalSections/WaitEmail'
import WaitList from './ModalSections/WaitList'

const showModalStage = (stage , closeModal , openModal) => {
  console.log(stage)
  if( stage === 'reserve'){
    return <ReserveForm
    closeModal={closeModal}
     openModal={openModal}
    /> 
  }else if(stage === 'wait-email'){
    return <WaitEmail
    closeModal={closeModal}
    openModal={openModal}
    />
  }else if(stage === 'join-form'){
    return <JoinListForm
    closeModal={closeModal}
    openModal={openModal}
   /> 
  }else if(stage === 'wait-list'){
    return <WaitList
    closeModal={closeModal}
    openModal={openModal}
    />
  }else{
    <></>
  }
}

const Modal = ({modalStage ,closeModal , openModal}) => {
  // const query = 
  return (
    <div className='h-full absolute z-50 bg-black/70 w-full'>

        <div className='flex items-center justify-center h-full relative ' onClick={()=>closeModal()}>
            {
             showModalStage( modalStage,closeModal , openModal)
            }
            
        </div>
    </div>
  )
}

export default Modal