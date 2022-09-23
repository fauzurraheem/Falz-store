import React, { useContext, useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {BsPersonCircle} from 'react-icons/bs';
import {RiLockPasswordLine} from 'react-icons/ri';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineGoogle} from 'react-icons/ai';
import { createUserWithEmailAndPassword, getAuth,  updateProfile,} from 'firebase/auth'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";






interface Props {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>> 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SingUpForm:React.FC<Props> = ({setSignIn, setOpen}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const auth = getAuth()


 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if(password.length <= 6){
      setLoading(false)
      return toast.error('Weak Password')
    } else if(name === '' || email === '' || password === ''){
      setLoading(false)
      return toast.error('Invalid Credentials')
    }

      try {
       await createUserWithEmailAndPassword(auth, email, password)

       updateProfile(auth.currentUser,{
        displayName:name
       })
       setName('')
       setEmail('')
       setPassword('')
       setOpen(false)
      router.push('/')
      setLoading(false)
       toast.success('Registration sucessful')
       setOpen(false)
     
        
      } catch (error) {
        setLoading(false)
        toast.error(error)
      }

      router.push('/')
  }

  const loginWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    toast.success('Registration sucessful')
    setLoading(false)
    setOpen(false)
  }).catch((error) => {
    setLoading(false)
    toast.error('Poor connection, Please try again')
  });
  



  }

  return (
    <div className='text-gray-700'>
      <div>
        <h2 className='text-2xl text-center font-semibold'>Signing Up</h2>
        <p className='text-center'>Create an account with email</p>
      </div>
      <form className='text-gray-500 text-sm text-left' onSubmit={handleSubmit}>
        <div className='flex flex-col mb-2'>
          <label htmlFor="name">Name</label>
          <div className='flex items-center  h-10 mt-1'>
            <BsPersonCircle color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='name' className='  h-full pl-2 ml-2 w-full border-b bg-white  rounded outline-none' style={{backgroundColor:'transparent'}} placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className='flex mb-2 flex-col'>
          <label htmlFor="email">Email</label>
          <div className='flex items-center  h-10 mt-1'>
            <HiOutlineMail color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='email' className='outline-0 h-full border-b pl-2 ml-2 w-full rounded bg-white' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className='flex mb-4 flex-col'>
          <label htmlFor="password">Password</label>
          <div className='  rounded flex items-center h-10 mt-1'>
            <RiLockPasswordLine color='rgb(55, 65 ,81)' size={20}/>
            <input type="text" name='password' className='outline-0 h-full pl-2 ml-2 w-full border-b focus:bg-white rounded' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        {
          !loading ? <button className='py-3 text-center w-full bg-emerald-500 hover:bg-emerald-700  text-white text-xl rounded-lg' type="submit">Register</button> :
          <button className='py-3 text-center w-full bg-emerald-500 hover:bg-emerald-700  text-white text-xl rounded-lg' type="submit">Processing...</button>
        }
      </form>
      <div>
        <div className='grid  grid-cols-1  md:grid-cols-2 m-4'>
          <div className='py-2 flex px-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-blue-600 m-2'>
            <GrFacebookOption size={30} />
            <p  className='m-0'>Login With Facebook</p>
          </div>
          <div className='py-2 flex px-2 m-2  items-center bg-gray-100 rounded-md text-gray-600 font-semibold hover:bg-red-600'  onClick={loginWithGoogle}>
            <AiOutlineGoogle size={30}/>
            <p className='m-0'>Login With Google</p>
          </div>
        </div>
        <p className='text-center text-sm'>Already have an account <span className='font-semibold cursor-pointer' onClick={() => setSignIn(true)}> Login</span></p>
      </div>
    </div>
  )
}

export default SingUpForm

