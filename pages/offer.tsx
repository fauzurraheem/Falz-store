import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import page from '../assets/webp/page-header-bg.jpg'
import image10 from '../assets/webp/image10.webp'
import image11 from '../assets/webp/image11.webp'
import image42 from '../assets/webp/image42.webp'
import image43 from '../assets/webp/image43.webp'
export interface t {
  hours: number,
  minutes:number
  seconds:number
  days:number
}


const Offer = () => {
  const [text, setText] = useState('Winter 21')
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`11/01/${year}`) - +new Date();
    let timeLeft:t =  {
      hours:0,
      minutes:0,
      seconds:0,
      days:0
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };



 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });


  return (
    <div className=''>
      <div className='	 w-full h-44 flex items-center justify-center '>
        <div className='absolute -z-10 w-full h-44'>
            <Image src={page}
            layout="fill"
            objectFit="cover"
            objectPosition='center'
            quality={100}
             />
        </div>
        <h1 className='text-4xl font-medium'>Mega Offer</h1>
      </div>
      <div className='sm:py-14 sm:px-10 py-10 px-4 bg-gray-50 grid gap-6  lg:grid-cols-2'>
        <section className='flex justify-between Sm:items-center bg-white rounded flex-col Sm:flex-row'>
          <div className='p-6 flex items-center'>
            <div className='hidden ph:block'>
              <Image src={image10} width={100} height={100} quality={100}/>
            </div>
            <div className='ml-3 text-base'>
              <div className='text-sm mb-1 '>
              <span className='p-1 rounded bg-red-200'>00</span>  : <span className='p-1 rounded bg-red-200'>00</span> : <span className='p-1 rounded bg-red-200'>00</span> 
              : <span className='p-1 rounded bg-red-200'>00</span>
              </div>
              <p className=' mb-2'>Summer Gift Voucher</p>
              <p className='font-semibold m-0'> <span className='text-xl text-red-500'>10% </span> Off</p>
            </div>  
          </div>
          <div className='Sm:w-[35%] px-6 py-4 text-xs Sm:border-l-4 border-gray-200 border-dashed relative'>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -top-3 -left-4 hidden Sm:block'></div>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -bottom-3 -left-4 hidden Sm:block'></div>
            <div className='text-base'>
              <span className='mr-4 text-gray-600' >Coupon</span>
              <span className='text-red-500'>Inactive</span>
            </div>
            <div className='w-full text-lg bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
              <button className='w-full' >
                <span childrenw-full>Summer 22</span>
              </button>
            </div>
            <p className='m-0 mt-2 text-gray-400'>* This coupon code will apply on <span className='font-semibold text-gray-500'>Cloths type products</span>  and when you shopping more then <span className='font-semibold text-gray-500'>$500</span> </p>
          </div>
        </section>
        <section className='flex justify-between Sm:items-center bg-white rounded flex-col Sm:flex-row'>
          <div className='p-6 flex items-center'>
            <div className='hidden ph:block'>
              <Image src={image11} width={100} height={100} quality={100}/>
            </div>
            <div className='ml-3 text-base'>
              <div className='text-sm mb-1 '>
              <span className='p-1 rounded bg-emerald-200'>{timeLeft.days}</span>  : <span className='p-1 rounded bg-emerald-200'>{timeLeft.hours}</span> : <span className='p-1 rounded bg-emerald-200'>{timeLeft.minutes}</span> 
              : <span className='p-1 rounded bg-emerald-200'>{timeLeft.seconds}</span>
              </div>
              <p className=' mb-2'>Summer Gift Voucher</p>
              <p className='font-semibold m-0'> <span className='text-xl text-red-500'>15% </span> Off</p>
            </div>  
          </div>
          <div className='Sm:w-[35%] px-6 py-4 text-xs Sm:border-l-4 border-gray-200 border-dashed relative'>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -top-3 -left-4 hidden Sm:block'></div>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -bottom-3 -left-4 hidden Sm:block'></div>
            <div className='text-base'>
              <span className='mr-4 text-gray-600' >Coupon</span>
              <span className='text-emerald-500'>Active</span>
            </div>
            <div className='w-full text-lg bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
              <button className='w-full' onClick={() => {navigator.clipboard.writeText('Winter 22')}}>
                <span className='w-full' onClick={() => setText('Copied')}>{text}</span>
              </button>
            </div>
            <p className='m-0 mt-2 text-gray-400'>* This coupon code will apply on <span className='font-semibold text-gray-500'>Grocery type products</span>  and when you shopping more then <span className='font-semibold text-gray-500'>$500</span> </p>
          </div>
        </section>
        <section className='flex justify-between Sm:items-center bg-white rounded flex-col Sm:flex-row'>
          <div className='p-6 flex items-center'>
            <div className='hidden ph:block'>
              <Image src={image42} width={100} height={100} quality={100}/>
            </div>
            <div className='ml-3 text-base'>
              <div className='text-sm mb-1 '>
              <span className='p-1 rounded bg-red-200'>00</span>  : <span className='p-1 rounded bg-red-200'>00</span> : <span className='p-1 rounded bg-red-200'>00</span> 
              : <span className='p-1 rounded bg-red-200'>00</span>
              </div>
              <p className=' mb-2'>Summer Gift Voucher</p>
              <p className='font-semibold m-0'> <span className='text-xl text-red-500'>12% </span> Off</p>
            </div>  
          </div>
          <div className='Sm:w-[35%] px-6 py-4 text-xs Sm:border-l-4 border-gray-200 border-dashed relative'>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -top-3 -left-4 hidden Sm:block'></div>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -bottom-3 -left-4 hidden Sm:block'></div>
            <div className='text-base'>
              <span className='mr-4 text-gray-600' >Coupon</span>
              <span className='text-red-500'>Inactive</span>
            </div>
            <div className='w-full text-lg bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
              <button className='w-full'>
                <span>Summer 22</span>
              </button>
            </div>
            <p className='m-0 mt-2 text-gray-400'>* This coupon code will apply on <span className='font-semibold text-gray-500'>Cloths type products</span>  and when you shopping more then <span className='font-semibold text-gray-500'>$600</span> </p>
          </div>
        </section>
        <section className='flex justify-between Sm:items-center bg-white rounded flex-col Sm:flex-row'>
          <div className='p-6 flex items-center'>
            <div className='hidden ph:block'>
              <Image src={image43} width={100} height={100} quality={100}/>
            </div>
            <div className='ml-3 text-base'>
              <div className='text-sm mb-1 '>
              <span className='p-1 rounded bg-red-200'>00</span>  : <span className='p-1 rounded bg-red-200'>00</span> : <span className='p-1 rounded bg-red-200'>00</span> 
              : <span className='p-1 rounded bg-red-200'>00</span>
              </div>
              <p className=' mb-2'>Summer Gift Voucher</p>
              <p className='font-semibold m-0'> <span className='text-xl text-red-500'>20% </span> Off</p>
            </div>  
          </div>
          <div className='Sm:w-[35%] px-6 py-4 text-xs Sm:border-l-4 border-gray-200 border-dashed relative'>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -top-3 -left-4 hidden Sm:block'></div>
            <div className='w-6 h-6 rounded-full absolute bg-gray-50 -bottom-3 -left-4 hidden Sm:block'></div>
            <div className='text-base'>
              <span className='mr-4 text-gray-600' >Coupon</span>
              <span className='text-red-500'>Inactive</span>
            </div>
            <div className='w-full text-lg bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
              <button className='w-full'>
                <span>August 21</span>
              </button>
            </div>
            <p className='m-0 mt-2 text-gray-400'>* This coupon code will apply on <span className='font-semibold text-gray-500'>Grocery type products</span>  and when you shopping more then <span className='font-semibold text-gray-500'>$1000</span> </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Offer
