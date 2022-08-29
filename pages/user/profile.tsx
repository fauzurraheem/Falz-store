import React from 'react'
import Link from 'next/link'
import { FiUnlock} from 'react-icons/fi';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import { GrUnorderedList} from 'react-icons/gr';
import { AiOutlineSetting} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';
import { RiShoppingBag3Fill} from 'react-icons/ri';
import { signOut } from 'firebase/auth';
import {GrCloudUpload} from 'react-icons/gr'
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';








const profile = () => {
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
          <p className='mx-4 cursor-pointer
          '>Change Password</p>
        </Link>
      </div>
      <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-xl p-2 my-4 cursor-pointer' onClick={logOut}>
        <FiUnlock />
        <p className='mx-4 cursor-pointer' >Logout</p>
      </div>
    </div>
    <div className=' rounded-lg lg:w-3/4 bg-white p-6 my-6 mx-6 sticky top-60 lg:top-32'>
      <form>
        <p className='text-sm'>Photo</p>
        <div className='border-dashed text-sm w-full border-4 p-6 flex flex-col items-center mb-8 rounded-lg'>
            <input type="image" src="" alt="" />
            <GrCloudUpload size={40} color='green' className='text-center'/>
            <p className='text-center'>Drag your image here</p>
            <p className='text-center text-gray-300 '>(Only *.jpeg and *.png images will be accepted)</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="name" className='text-gray-500'>Full Name</label>
            <input type="password" name="name" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' />
          </div>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="phone" className='text-gray-500'>Phone/Mobile</label>
            <input type="password" name="phone" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your phone Number' />
          </div>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="address" className='text-gray-500'>Your Address</label>
            <input type="password" name="address" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your address' />
          </div>
          <div className='grid grid-cols-1 gap-1 text-sm'>
            <label htmlFor="email" className='text-gray-500'>Email Address</label>
            <input type="password" name="email" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='your email' />
          </div>
        </div>
        <div className='p-4 w-full'>
        <button type="submit" className='md:w-[25%] w-full md:ml-auto bg-emerald-500 text-sm text-white py-3 rounded-md'>Update Profile</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default profile