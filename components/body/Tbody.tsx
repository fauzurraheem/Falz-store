import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";
import Image from 'next/image'
import image10 from '../../assets/webp/image10.webp'
import image11 from '../../assets/webp/image11.webp'
import { categoryArr } from '../../data/category';
import Link from 'next/link';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


const Tbody = () => {
  return (
    <>
    <div className='py-4 px-8'>
      <div className='flex gap-3'>
          <div className='md:w-3/5 w-full'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              style={{maxHeight:'', height:'90%'}}
            >
              <SwiperSlide>
                <div className=' w-full h-full rounded-xl flex justify-center flex-col px-4 py-4 sm:py-9' style={{backgroundImage:`url(./image7.webp)`,backgroundRepeat:'no-repeat',backgroundSize:"", backgroundPosition:'bottom'}}>
                <h1 className='text-2xl font-semibold w-[50%]  sm:hidden'>The Best Quality Product...</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 sm:hidden'>Dramatically facilitate effective ...</p>
                  <h1 className='text-2xl font-semibold w-[50%]  hidden sm:block'>The Best Quality Product Guaranteed!</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 hidden sm:block'>Dramatically facilitate effective total linkage for go forward processces</p>
                  <span className='bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6 hidden sm:block'>Shop Now</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=' w-full h-full rounded-xl flex justify-center flex-col px-4 py-4 sm:py-9' style={{backgroundImage:`url(./image8.webp)`,backgroundRepeat:'no-repeat',backgroundSize:"", backgroundPosition:'bottom'}}>
                  <h1 className='text-2xl font-semibold w-[50%] sm:hidden '>The Best Quality...</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 sm:hidden'>Dramatically facilitate effective...</p>
                  <h1 className='text-2xl font-semibold w-[50%] hidden sm:block'>The Best Quality Product Guaranteed!</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 hidden sm:block'>Dramatically facilitate effective total linkage for go forward processces</p>
                  <span className=' hidden sm:block bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6'>Shop Now</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=' w-full h-full rounded-xl flex justify-center flex-col px-4 py-4 sm:py-9' style={{backgroundImage:`url(./image9.webp)`,backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}>
                  <h1 className='text-2xl font-semibold w-[50%]  sm:hidden'>The Best Quality...</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 sm:hidden'>Dramatically facilitate effective...</p>
                  <h1 className='text-2xl font-semibold w-[50%] hidden sm:block '>The Best Quality Product Guaranteed!</h1>
                  <p className='mb-6 w-[50%]  text-gray-600 hidden sm:block'>Dramatically facilitate effective total linkage for go forward processces</p>
                  <p className='hidden sm:block bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6'>Shop Now</p>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div className='w-2/5 border-2 border-orange-500 bg-gray-50 text-sm text-gray-500 hidden md:block'>
          <h5 className='w-full text-lg text-center bg-orange-100 m-0 text-black py-3 '>Latest Super Discount Active Coupon Code</h5>
          <div className=' flex flex-col items-center justify-evenly h-[294px]  text-sm'>
            <div className='flex w-[95%]'>
              <div className='w-[70%]  flex rounded-md bg-white border-r-4 border-dashed border-gray-300'>
                <div className=' p-1 flex items-center rounded-2xl overflow-hidden'>
                  <Image src={image11} width={70} height={80} objectFit="cover"/>
                </div>
                <div className='ml-2 p-1 flex flex-col justify-center'>
                  <p className='m-0'> <span className='text-base font-semibold text-red-600'>10% </span>Off <span className='py-1 px-3 bg-red-200 text-red-600 rounded-xl'>Inactive</span> </p>
                  <p className='mb-0'> Summer Gift Voucher</p>
                  <p className='mt-2 text-gray-50 font-semibold m-0'> <span className='p-1 rounded bg-red-400'>00</span>  : <span className='p-1 rounded bg-red-400'>00</span> : <span className='p-1 rounded bg-red-400'>00</span></p>
                </div>
              </div>
              <div className='w-[30%] p-2 text-xs rounded-bl-[20px] bg-white flex flex-col justify-center'>
                <p className='cursor-pointer p-2 border border-dashed border-emerald-500 bg-emerald-300 text-emerald-700 text-center rounded-xl text-sm font-medium'>Summer22</p>
                <p > * This coupon apply when shopping more then $500</p>
              </div>
            </div>
              <div className=' flex w-[95%]'>
                <div className='w-[70%]  flex  rounded-md bg-white border-r-4 border-dashed border-gray-300'>
                  <div className='rounded-xl  overflow-hidden p-1 flex items-center'>
                    <Image src={image10} width={70} height={70}/>
                  </div>
                  <div className='ml-2 flex flex-col justify-center'>
                    <p className='m-0'> <span className='text-base font-semibold text-red-600'>15% </span>Off <span className='py-1 px-3 bg-emerald-200 text-emerald-600 rounded-xl'>Inactive</span> </p>
                    <p className='m-0'> Winter Gift Voucher</p>
                    <p className='mt-2 text-gray-50 font-semibold m-0'> <span className='p-1 rounded bg-emerald-600'>00</span>  : <span className='p-1 rounded bg-emerald-600'>00</span> : <span className='p-1 rounded bg-emerald-600'>00</span></p>
                  </div>
                </div>
                <div className='w-[30%] p-2 text-xs rounded-bl-[20px] bg-white flex flex-col justify-center'>
                  <p className='cursor-pointer p-2 border border-dashed border-emerald-500 bg-emerald-300 text-emerald-700 text-center m-auto rounded-xl text-sm font-medium'>Winter21</p>
                  <p > * This coupon apply when shopping more then $500</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='p-8 bg-orange-100 mt-10 md:flex justify-between items-center rounded-lg hidden '>
        <div>
          <p className='text-lg'><span className='font-semibold text-emerald-600'>100% Natural Quality</span> Organic Product</p>
          <p className='text-sm text-gray-500'>See Our latest discounted products from here and get a <span className='text-emerald-500 '>specialdiscount product</span> </p>
        </div>
        <button className='h-9 px-6 text-sm bg-emerald-500 text-gray-100 rounded-3xl'>Shop now</button>
      </div>
    </div>
    <div className='bg-gray-100 sm:p-10 py-6 px-2 text-xs '>
      <div className='mb-9 text-center'>
        <h4 className='text-lg font-medium'>Featured Categories</h4>
        <p className='text-sm text-gray-600'>Choose your necessary products from this feature categories.</p>
      </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-3 ph:grid-cols-2 text-gray-400 gap-px'>
        {
          categoryArr.map((cat) => (
            <div className='flex bg-white p-3'>
            <div className='w-2/4 h-full max-w-[2rem]' style={{backgroundImage:`url(${cat.icon})`,backgroundRepeat:'no-repeat',backgroundSize:"contain"}}>
            </div>
            <div className='p-1 flex flex-col '>
              <Link href={`/${cat.parent}`} >
                <h5 className='text-sm text-gray-600 hover:text-emerald-500 cursor-pointer'>{cat.parent}</h5>
              </Link>
                {cat.children.map((chil)=> (
                <div className='flex items-center'>
                <MdOutlineKeyboardArrowRight size={15} />
                  <Link href={`/children/${chil}`}>
                  <span className='cursor-pointer hover:text-emerald-500'>{chil}</span>
                </Link>
                    </div>
                ))}
            </div>
          </div>
          ))
        } 
      </div>
    </div>

  </>
  )
}

export default Tbody