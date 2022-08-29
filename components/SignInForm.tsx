import React, { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineGoogle} from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

interface Props {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>> 
}

const SignInForm:React.FC<Props> = ({setSignIn}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

      try {
       await signInWithEmailAndPassword(auth, email, password)
       setEmail('')
       setPassword('')
       
       toast.success('Registration sucessful')
        
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
    <div className='p-6 text-gray-700'>
      <div className='mb-6'>
        <h2 className='lg:text-4xl text-2xl text-center font-semibold pb-3'>Login</h2>
        <p className='text-center'>Login with your email</p>
      </div>
      <form className='text-gray-500 text-sm ' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <div className='border border-gray-300  rounded flex items-center my-2'>
            <HiOutlineMail color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='email' className='outline-0 p-3' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password</label>
          <div className='border border-gray-300  rounded flex items-center my-2'>
            <RiLockPasswordLine color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='password' className='outline-0 p-3' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
        </div>
        <p className='my-4 text-gray-900 underline decoration-solid hover:no-underline	'>Forget password?</p>
     
        <button className='py-3 text-center w-full bg-emerald-500 hover:bg-emerald-700  text-white text-xl rounded-lg' type="submit">Login</button>
      </form>
      <div>
        <div className='grid  grid-cols-1  md:grid-cols-2 m-4'>
          <div className='py-2 flex px-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-blue-600 m-2'>
            <GrFacebookOption size={30} />
            <p>Login With Facebook</p>
          </div>
          <div className='py-2 flex px-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-red-600 m-2' onClick={loginWithGoogle}>
            <AiOutlineGoogle size={30}/>
            <p>Login With Google</p>
          </div>
        </div>
        <p className='text-center text-sm'>Not have a account? <span className='font-semibold cursor-pointer' onClick={() => setSignIn(false)}> Register</span></p>
      </div>
    </div>
  )
}

export default SignInForm