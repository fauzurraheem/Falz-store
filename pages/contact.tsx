import Image from 'next/image';
import React from 'react'
import { FiPhoneCall} from 'react-icons/fi';
import { HiOutlineLocationMarker} from 'react-icons/hi';
import { HiOutlineMail} from 'react-icons/hi';
import page from '../assets/webp/page-header-bg.jpg'

const Contact = () => {
  return (
    <div >
      <div className='	 w-full h-44 flex items-center justify-center '>
        <div className='absolute -z-10 w-full h-44'>
            <Image src={page}
            layout="fill"
            objectFit="cover"
            objectPosition='center'
            quality={100}
             />
        </div>
        <h1 className='text-4xl font-medium'>Contact Us</h1>
      </div>
      <div className=' px-6 py-16 grid sm:grid-cols-2	lg:grid-cols-3 gap-7 	'>
        <div className='p-8 border	border-slate-200	rounded-xl flex items-center flex-col'>
          <HiOutlineMail size={30} color='rgb(74 ,222 ,128)' />
          <h5 className='text-xl text-center font-medium my-3'>Email Us</h5>
          <p className='text-center'> <span className='text-green-400	'>kachabazar@gmail.com</span>  Interactively grow empowered for process-centric total linkage.</p>
        </div>
        <div className='p-8 border	border-slate-200	rounded-xl flex items-center flex-col'>
         <HiOutlineLocationMarker size={30} color='rgb(74 ,222 ,128)' className='text-center'/>
          <h5 className='text-xl text-center font-medium my-3'>Call Us</h5>
          <p className='text-center'> <span>029-00124667 </span> Distinctively disseminate focused solutions clicks-and-mortar ministate.</p>
        </div>
        <div className='p-8 border	border-slate-200	rounded-xl flex items-center flex-col'>
        <FiPhoneCall size={30} color='rgb(74 ,222 ,128)' />
          <h5 className='text-xl text-center font-medium my-3'>Location</h5>
          <p className='text-center'> <span></span> Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
        </div>
      </div>
      <div className='px-6 my-20 lg:flex'>
        <div className='lg:w-2/4'>
          <div >
            <h3 className='my-7 text-2xl font-medium'>
            For any suppoort just send your query
            </h3>
            <p className='my-6'>
            Collaboratively  promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.
            </p>
          </div>
          <form className='grid text-sm font-light'>
            <div className='grid grid-cols-2 '>
              <div className='flex flex-col'>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name'className='border	border-slate-200	rounded my-2 p-2 mr-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Your Email</label>
                <input type="text" name='email' className='border	border-slate-200	rounded my-2 p-2'/>
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="subject">Subject</label>
              <input type="text" name='subject'className='border	border-slate-200	rounded my-2 p-4' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols={20} rows={8} className='border	border-slate-200	rounded my-2 p-4' />
            </div>
            <button className='w-48 px-6 py-3 font-medium rounded-lg text-white	 bg-green-700	' type='submit'>Send Message</button>
          </form>
        </div>
        <div>
          {/* svg */}
        </div>
      </div>
    </div>
  )
}

export default Contact