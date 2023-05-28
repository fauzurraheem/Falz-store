import React from 'react'
import Link from 'next/link'
import { FiUnlock} from 'react-icons/fi';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import { GrUnorderedList} from 'react-icons/gr';
import { AiOutlineSetting} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter()

    const logOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    signOut(auth).then(() => {
      router.push('/')
      toast.success("LogOut Successfull");
    }).catch((error) => {
      console.log(error)
    });
    
  }
  return (
    <div className='py-8 px-4 sm:px-8 flex flex-col md:flex-row bg-gray-50 md:justify-between'>
      <div className=' h-[20rem] md:w-[25%] rounded-lg bg-white p-6 text-sm md:sticky top-32'>
      <Link href={'/user/dashboard'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <MdOutlineDashboardCustomize />
            <p className='mx-2 cursor-pointer m-0'>Dashboard</p>
        </div>
        </Link>
        <Link href={'/user/order'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <GrUnorderedList />
            <p className='mx-2 cursor-pointer m-0'>My Order</p>
        </div>
        </Link>
        <Link href={'/user/profile'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <AiOutlineSetting />
            <p className='mx-2 cursor-pointer m-0'>Update Profile</p>
        </div>
        </Link>
        <Link href={'/user/password'}>
        <div className='flex items-center hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <AiOutlineFileText />
            <p className='mx-2 cursor-pointer m-0'>Change Password</p>
        </div>
        </Link>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4 cursor-pointer' onClick={logOut}>
          <FiUnlock />
          <p className='mx-2 cursor-pointer m-0' >Logout</p>
        </div>
      </div>
      <div className=' rounded-lg md:w-[70%] bg-white p-6 sticky top-60 lg:top-32 mt-8 md:mt-0'>
        <form className=' grid grid-cols-1 gap-4'>
          <h3 className='font-semibold my-1'>Change password</h3>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="email" className='text-gray-500'>Email</label>
            <input type="email" name="email" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500 ' placeholder='Email'/>
          </div>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="password" className='text-gray-500'>Password</label>
            <input type="password" name="password" className='hover:border-emerald-500 focus:border-emerald-500 border py-3 px-3 rounded-md outline-none' placeholder='Your current password'/>
          </div>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="Npassword" className='text-gray-500'>New Password</label>
            <input type="password" name="Npassword" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='New password' />
          </div>
          <button type="submit" className='md:w-[25%] w-full md:ml-auto bg-emerald-500 text-sm text-white py-3 rounded-md'>Change Password</button>
        </form>   

      </div>
  </div>
  )
}

export default Details