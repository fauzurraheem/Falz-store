import React, { useContext, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {MdNotificationsNone} from 'react-icons/md';

import { FiShoppingCart } from 'react-icons/fi';
import { FiUser} from 'react-icons/fi';
import { FaShoppingBag} from 'react-icons/fa';
import { FiPhoneCall} from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMenuAlt1 } from 'react-icons/hi';
import LogDisplay from './SingIn';
import Link from 'next/link';
import { AuthContext } from '../context/auth/authcontext';
import { auth } from '../firebase.config';
import { useRouter } from 'next/router';
import Display from './DisplayName';

const Navbar = () => {
const [ifUser, setIfUser] = useState(false)

 const user = useContext(AuthContext)
 
 console.log(user)
 


  
  return (
    <>
        <div className='lg:flex h-8 justify-between text-sm items-center px-9 bg-gray-100  text-[.8rem]	hidden ' >
          <div className='flex items-center '>
            <FiPhoneCall />
            <p className='pl-1 text-gray-700' >
              We are available 24/7, Need help? Call Us:
            +01234560352
            </p>
          </div>
          <div className='flex items-center'>
            <p className='border-r border-gray-700 px-3 text-gray-700' >About Us</p>
            <p className='border-r border-gray-700 px-3 text-gray-700'>Contact Us</p>
            <p className='border-r border-gray-700 px-3 text-gray-700' >my Account</p>
            <p className=' px-3 text-gray-700 '>login</p>
          </div>
        </div>
    
      <div className='flex flex-col  z-10 w-full sticky top-0'>
        <div className=''>
        <div className='flex items-center justify-center lg:justify-between bg-emerald-500	px-9 static top-0 h-[76.8px]  '>
          <Link href={'./'}>
            <div className='w-1/4 lg:flex text-white 	hidden' >
                <div className='mr-2'>
                  <FaShoppingBag  color='white' size={35}/>
                </div>
                <div className='flex flex-col justify-center' >
                  <span className='text-[1.2rem]  tracking-[0.3rem] font-[1000]	leading-4'>KACHA</span>
                  <span className='text-[.9rem] tracking-[0.5rem] font-medium leading-3	'>BAZAR</span>
                </div>
              </div>
          </Link>
            
            <div className='flex items-center h-3/5 bg-white p-2 rounded-md w-3/4 '>
              <input type="text" className='pl-6 w-11/12  outline-0 text-[.8rem]' placeholder='Search for products (e.g fish,apple,oil) ' />
              <TbSearch color='gray' size={20}/>
            </div>
            <div className='lg:flex w-1/4 justify-evenly hidden'>
              <MdNotificationsNone color='white' size={30}/>
              <FiShoppingCart color='white' size={30}/>
              <Display setIfUser={setIfUser} />
              {ifUser &&
                <LogDisplay setIfUser={setIfUser}/>
              }
              
            
            </div>
          </div>
          <div className='lg:flex  items-center justify-between bg-white border-b-2	border-slate-100 h-[50px] px-9 hidden text-[.9rem] '>
            <div>
              <ul className='flex'>
                <li className='flex items-center pr-4'>
                  <span>Categories</span>
                  <MdOutlineKeyboardArrowDown />
                </li>
                <li className='px-4'> 
                  <span>About Us</span>
                </li>
                <li className='px-4'> 
                <span>Contact Us</span></li>
                <li className='flex items-center px-4'> 
                  <span>Pages</span>
                  <MdOutlineKeyboardArrowDown />
                </li>
                <li className='px-4'>
                  <span>Offer</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex justify-between '>
                <li className='px-4'>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
      <div className='lg:hidden flex fixed bottom-0 w-full bg-emerald-500 h-20  items-center justify-between px-12 z-10' >
        <HiMenuAlt1 color='white' size={30} />
        <BiHomeAlt color='white' size={30} />
        <FiShoppingCart  color='white' size={30}/>
        <Link href={'/user/dashboard'}>
          <FiUser  color='white' size={30} onClick={(e) => setIfUser(!false)}/>
        </Link>
        
        {ifUser &&
          <LogDisplay setIfUser={setIfUser}/>
        }

      </div>
    </>
    
  )
}

export default Navbar