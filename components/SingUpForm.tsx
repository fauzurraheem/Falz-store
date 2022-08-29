import React, { useContext, useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineGoogle} from 'react-icons/ai';
// import { useAuth } from '../context/auth/authcontext';
import { createUserWithEmailAndPassword, getAuth,  updateProfile,} from 'firebase/auth'

import { toast } from 'react-toastify';

import { AuthContext } from '../context/auth/authcontext';
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";






interface Props {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>> 
}

const SingUpForm:React.FC<Props> = ({setSignIn}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const auth = getAuth()


 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

      try {
       await createUserWithEmailAndPassword(auth, email, password)

       updateProfile(auth.currentUser,{
        displayName:name
       })
       setName('')
       setEmail('')
       setPassword('')
       
       toast.success('Registration sucessful')
       router.push('/')
        
      } catch (error) {
        toast.error('invalid credentials')
      }

      
  }

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // ...
    // console.log(user)
    toast.success('Registration sucessful')

  }).catch((error) => {
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
    toast.error('Poor connection, Please try again')
  });
  



  }

  return (
    <div className='px-10  text-gray-700'>
      <div className='my-3'>
        <h2 className='text-2xl text-center font-semibold pb-3'>Signing Up</h2>
        <p className='text-center'>Create an account with email</p>
      </div>
      <form className='text-gray-500 text-sm ' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
          <label htmlFor="name">Name</label>
          <div className='border border-gray-300  rounded flex items-center my-2'>
            <HiOutlineMail color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='name' className='outline-0 p-3 focus:bg-white w-full rounded' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <div className='border border-gray-300  rounded flex items-center my-2'>
            <HiOutlineMail color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='email' className='outline-0 p-3 w-full rounded bg-white' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password</label>
          <div className='border border-gray-300  rounded flex items-center my-2'>
            <RiLockPasswordLine color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='password' className='outline-0 p-3 w-full focus:bg-white rounded' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
        </div>
        <button className='py-3 text-center w-full bg-emerald-500 hover:bg-emerald-700  text-white text-xl rounded-lg' type="submit">Register</button>
      </form>
      <div>
        <div className='grid  grid-cols-1  md:grid-cols-2 m-4'>
          <div className='py-2 flex px-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-blue-600 m-2'>
            <GrFacebookOption size={30} />
            <p>Login With Facebook</p>
          </div>
          <div className='py-2 flex px-2 m-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-red-600'  onClick={loginWithGoogle}>
            <AiOutlineGoogle size={30}/>
            <p>Login With Google</p>
          </div>
        </div>
        <p className='text-center text-sm'>Already have an account <span className='font-semibold cursor-pointer' onClick={() => setSignIn(true)}> Login</span></p>
      </div>
    </div>
  )
}

export default SingUpForm

