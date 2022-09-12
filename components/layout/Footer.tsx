import React from 'react'
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiPhoneCall} from 'react-icons/fi';
import { MdPayment} from 'react-icons/md';
import { FiGift} from 'react-icons/fi';
import { FaShoppingBag} from 'react-icons/fa';
import appstore from '../../assets/appstore.svg'
import google from '../../assets/google.svg'
import p from '../../assets/p.jpg'
import Image from 'next/image';
import { RiWhatsappFill} from 'react-icons/ri';
import { BsPinterest} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';
import { BsFacebook} from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';
import image00 from '../../assets/webp/image00.webp'
import image2 from '../../assets/webp/image2.webp'
import logo from '../../assets/webp/logocolor.svg'



const Footer = () => {
  return (
    <div>
      <div className='mb-20 lg:mb-0 h-2/4 w-full bottom-0' >
        <div className='flex justify-evenly pt-10 px-6  bg-indigo-50	'>
          <div className='hidden sm:flex items-center'>
          <Image src={image00} width={1000} height={1000} />
          </div>
          <div className='text-base	mx-20'>
            <h3 className='text-center text-2xl	font-bold'>Get Your Daily Needs From Our KachaBazar Store</h3>
            <p className='text-center	'>
            There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
            </p>
            <div className='flex justify-center '>
              <Image src={appstore} width={200} height={200} />
              <Image src={google} width={250} height={250}  />
            </div>
          </div>
          <div className='hidden  md:flex items-center '>
            <Image src={image2} width={1000} height={1000} />
          </div>
        </div>
        <div className='hidden w-full h-[10%] lg:flex py-6 px-12 justify-evenly  border-r-green-200	' >
          <div className='flex items-center border-r 	 px-4'>
            <MdOutlineLocalShipping size={20} color='rgb(74 ,222 ,128)'/>
            <span className='ml-2 text-[.9rem]'>Free Shipping From $500.00</span>
          </div>
          <div className='flex items-center border-r 	 px-4'>
            <FiPhoneCall size={20} color='rgb(74 ,222 ,128)'/>
            <span className='ml-2 text-[.9rem]'>Support 24/7 At Anytime</span>
          </div>
          <div className='flex items-center border-r 	 px-4'>
            <MdPayment size={20} color='rgb(74 ,222 ,128)'/>
            <span  className='ml-2 text-[.9rem]'>Secure Payment Totally Safe</span>
          </div>
          <div className='flex items-center border-r 	 px-4'>
          <FiGift size={20} color='rgb(74 ,222 ,128)'/>
            <span className='ml-2 text-[.9rem]'>Latest Offer Upto 20% Off</span>
          </div>
        </div>
        <hr className="hr-line">
          </hr>
        <div className='h-[45%] pt-10 px-12' >
          <div className=' grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-7	text-sm mb-8'>
            <div>
              <h6 className='text-lg py-3'>Company</h6>
              <ul className='text-gray-500'>
                <li className='hover:text-green-400	active:text-green-400	'>About Us</li>
                <li className='hover:text-green-400	active:text-green-400	'>Contact Us</li>
                <li className='hover:text-green-400	active:text-green-400	'>Careers</li>
                <li className='hover:text-green-400	active:text-green-400	'>Latest news</li>
              </ul>
            </div>
            <div>
              <h6 className='text-lg py-3'>Top Category</h6>
              <ul className='text-gray-500'>
                <li className='hover:text-green-400	active:text-green-400	'>Fish & Meat</li>
                <li className='hover:text-green-400	active:text-green-400	' > Soft Drinks</li>
                <li className='hover:text-green-400	active:text-green-400	'>Baby Care</li>
                <li className='hover:text-green-400	active:text-green-400	'>Beauty & Health</li >
              </ul>
            </div>
            <div>
              <h6 className='text-lg py-3'>My Account</h6>
              <ul className='text-gray-500'>
                <li className='hover:text-gray-600	active:text-gray-600	'>Dashboard</li>
                <li className='hover:text-gray-600	active:text-gray-600	'>My Orders</li>
                <li className='hover:text-gray-600	active:text-gray-600	'>Recent Orders</li>
                <li className='hover:text-gray-600	active:text-gray-600	'>Updated Profile</li>
              </ul>
            </div>
            <div>
              <div></div>
              <ul className='text-gray-500'>
                <div className='flex'>
                  <Image src={logo} width={100}  height={50} color='black'/>
                </div>
                <li>987 Andre Plain Suite High Street 838,</li>
                <li>Lake Hestertown, USA</li>
                <li>Tell: 02.356.1666</li>
                <li>Email: ccruidk@test.com</li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="hr-line">
            </hr>
            <div className='.border-gray-50 shadow-sm bg-gray-50 	py-6 px-6 grid grid-cols-3 border border-gray-50	rounded-xl'>
            
            <div>
              <p className='text-center'>Follow Us</p>
              <div className='flex my-6 justify-evenly'>
                <BsFacebook color='blue' size={30}/>
                <RiWhatsappFill color='green'  size={30}/>
                <BsPinterest color='red' size={30} />
                <AiFillTwitterCircle color='lightblue' size={30} />
                <BsLinkedin  color='blue' size={30}/>
              </div> 
            </div>
            <div className='hidden md:block'>
              <p className='text-center'> Contact Us</p>
              <p className='text-center  text-2xl font-bold my-6 text-emerald-500' > +012345-67900</p>
            </div>
            <div className='hidden md:block'>
              <p className='text-center'>paypal</p>
              <Image src={p} height={100} width={300} />
            </div>
          </div>
          </div>
          
        </div>
        
        <div className='w-full h-[10%] py-6 px-12 text-center	'>
  
          <p>Copyright 2022 @ <span className='text-emerald-400	'>HtmlLover</span> , All rights reserved.</p>
        </div>

      </div>
    </div>
    
  )
}

export default Footer