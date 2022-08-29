import Link from 'next/link'
import React from 'react'
import { FiUnlock} from 'react-icons/fi';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import { GrUnorderedList} from 'react-icons/gr';
import { AiOutlineSetting} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';


import { RiShoppingBag3Fill} from 'react-icons/ri';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const order = () => {
  const logOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    signOut(auth).then(() => {
      toast.success("LogOut Successfull");
    }).catch((error) => {
      console.log(e)
    });
    
  }




  return (
    <div className='p-8 flex flex-col lg:flex-row bg-gray-50 '>
    <div className=' h-[20rem] lg:w-[20rem] rounded-lg bg-white p-6 my-6 mx-6 text-sm lg:sticky top-32'>
      <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
        <MdOutlineDashboardCustomize />
        <Link href={'/user/dashboard'}>
          <p className='mx-4 cursor-pointer'>Dashboard</p>
        </Link>
      </div>
      <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
        <GrUnorderedList />
        <Link href={'/user/order'}>
          <p className='mx-4 cursor-pointer'>My Order</p>
        </Link>
      </div>
      <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
        <AiOutlineSetting />
        <Link href={'/user/profile'}>
          <p className='mx-4 cursor-pointer'>Update Profile</p>
        </Link>
      </div>
      <div className='flex items-center hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4'>
        <AiOutlineFileText />
        <Link href={'/user/password'}>
          <p className='mx-4 cursor-pointer'>Change Password</p>
        </Link>
      </div>
      <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4 cursor-pointer' onClick={logOut}>
        <FiUnlock />
        <p className='mx-4 cursor-pointer' >Logout</p>
      </div>
    </div>
    <div className=' rounded-lg lg:w-3/4 bg-white p-6 my-6 mx-6 sticky top-60 lg:top-32'>
      <div className=' flex flex-col items-center h-36 justify-center'>
        <h3 className='my-4'>No Orders yet</h3>
        <div className='text-emerald-600 text-center'>
          <RiShoppingBag3Fill size={70} />
        </div>
      </div>
    </div>
  </div>

  )
}

export default order