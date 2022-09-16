import React from 'react'
import { FiUnlock} from 'react-icons/fi';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import { GrUnorderedList} from 'react-icons/gr';
import { AiOutlineSetting} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FcProcess } from 'react-icons/fc';
import { GiCheckMark } from 'react-icons/gi';
import { RiShoppingBag3Fill} from 'react-icons/ri';
import Link from 'next/link';
import { auth } from '../../firebase.config';
import { Router, useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const dashboard = () => {
  const router = useRouter()
 
  const logOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    signOut(auth).then(() => {
      router.push('/')
      toast.success("LogOut Successfull");
    }).catch((error) => {
      console.log(e)
    });
    
  }


  return (
    <div className='py-8 px-4 sm:px-8 flex flex-col md:flex-row bg-gray-50 md:justify-between'>
      <div className=' h-[20rem] md:w-[25%] rounded-lg bg-white p-6 text-sm md:sticky top-32'>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
          <MdOutlineDashboardCustomize />
          <Link href={'/user/dashboard'}>
            <p className='mx-2 cursor-pointer m-0'>Dashboard</p>
          </Link>
        </div>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
          <GrUnorderedList />
          <Link href={'/user/order'}>
            <p className='mx-2 cursor-pointer m-0'>My Order</p>
          </Link>
        </div>

        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
          <AiOutlineSetting />
          <Link href={'/user/profile'}>
            <p className='mx-2 cursor-pointer m-0'>Update Profile</p>
          </Link>
        </div>
        <div className='flex items-center hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
          <AiOutlineFileText />
          <Link href={'/user/password'}>
            <p className='mx-2 cursor-pointer m-0'>Change Password</p>
          </Link>
        </div>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4 cursor-pointer' onClick={logOut}>
          <FiUnlock />
          <p className='mx-2 cursor-pointer m-0' >Logout</p>
        </div>
      </div>
      <div className=' rounded-lg md:w-[70%] bg-white p-6 sticky top-60 lg:top-32 mt-8 md:mt-0'>
        <div>
          <h3 className='text-xl font-bold my-2'>Dashboard</h3>
        </div>
        <div className='py-4 grid sm:grid-cols-1 md:grid-cols-4 gap-4 text-xs'>
          <div className='rounded-xl  py-4 px-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-red-200 text-red-600'>
            <FiShoppingCart size={20}/>
            </div>
            <div className='ml-2'>
              <p className='m-0'>Total</p>
              <p className='font-semibold text-sm m-0'>0</p>
             </div>
          </div>
          <div className='rounded-xl   p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-orange-200 text-orange-600'>
              <FcProcess size={20}/>
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Pendind Order</p>
              <p className='font-semibold text-sm m-0'>0</p>
             </div>
          </div>
          <div className='rounded-xl  p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-indigo-200 text-indigo-600'>
            <MdOutlineLocalShipping size={20} />
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Processing Order</p>
              <p className='font-semibold  text-sm m-0'>0</p>
             </div>
          </div>
          <div className='rounded-xl  p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-emerald-200 text-emerald-600'>
              <GiCheckMark size={20}/>
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Complete Order</p>
              <p className='font-semibold text-sm m-0'>0</p>
             </div>
          </div>
        </div>
        <div className=' flex flex-col items-center h-36 justify-center'>
          <h3 className='my-4 m-0 text-gray-400'>No Orders yet</h3>
          <div className='text-emerald-600 text-center m-0'>
            <RiShoppingBag3Fill size={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard