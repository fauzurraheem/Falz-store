import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import SignInForm from './SignInForm';
import SingUpForm from './SingUpForm';

 export interface Props {
  setIfUser: React.Dispatch<React.SetStateAction<boolean>>
}

const LogDisplay:React.FC<Props> = ({setIfUser}) => {
  const [signIn , setSignIn] = useState(true)
  return (
    <div className='fixed inset-0'>
      <div className=' absolute z-10 inset-0 bg-black/[0.6]' onClick={() => setIfUser(!true)}></div>
      <div className='absolute bg-white z-30 right-[7%] left-[7%] max-w-[614px]  lg:right-[25%] lg:left-[25%] md:right-[15%] md:left-[15%]  rounded-xl lg:h-[700px]  '>
        {signIn ? <SignInForm setSignIn={setSignIn}/> : <SingUpForm  setSignIn={setSignIn}/>}
          
      </div>
      <div className='absolute top-2 right-4  w-7 h-7 bg-white z-30 rounded-full' onClick={() => setIfUser(!true)}>
      <MdOutlineCancel size={29} color='red' />
      </div>
    </div>
  )
}

export default LogDisplay