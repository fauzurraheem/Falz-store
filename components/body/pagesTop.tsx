import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation, Pagination } from "swiper";
import { categoryArr } from '../../data/category';
import Link from 'next/link';


const PagesTop = () => {
  return (
    <div >
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'> 
          <div className='flex flex-col items-center rounded-lg text-white p-4' style={{backgroundImage:'url(./image3.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'bottom',width:'100%',height:'10rem' }}>
            <span className=' font-medium'>Taste of</span>
            <span className='text-xl font-semibold'>Fresh & Natural</span>
            <span className='text-sm'>Weekend discount offer</span>
            <Link href={'/children/Fresh Vegetable'}>
            <button className='bg-emerald-400 text-xs py-2 px-4 rounded-3xl mt-4'>Shop Now</button>
            </Link>
            
          </div>
          <div className='flex flex-col items-center rounded-lg  text-white p-4' style={{backgroundImage:'url(./image4.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'10rem',width:'100%', backgroundPosition:'bottom',}}>
            <span className=' font-medium'>Taste of</span>
            <span className='text-xl font-semibold'>Fish & Meat</span>
            <span className='text-sm'>Weekend discount offer</span>
            <Link href={'/Fish & Meat'}>
            <button className='bg-emerald-400 text-xs py-2 px-4 rounded-3xl mt-4'>Shop Now</button>
            </Link>
            
          </div>
          <div className='flex flex-col items-center rounded-lg  text-white p-4' style={{backgroundImage:'url(./image5.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'bottom', height:'10rem',width:'100%'}}>
            <span className=' font-medium'>Taste of</span>
            <span className='text-xl font-semibold'>Bread & Bakery</span>
            <span className='text-sm'>Weekend discount offer</span>
            <Link href={'/Biscuits & Cakes'}>
            <button className='bg-emerald-400 text-xs py-2 px-4 rounded-3xl mt-4'>Shop Now</button>
            </Link>
            
          </div>
      </div>
      <div>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[ Pagination]}
        className="mySwiper"  style={{marginTop:'3rem' ,marginBottom:'1rem',paddingBottom:'2rem'}}
      >
        {
          categoryArr.map((cat, index) => (
            <SwiperSlide key={index}>
            <div className='flex flex-col items-center bg-white p-3 rounded-lg'>
              <div className='h-7 w-7 rounded-xl shadow-lg' style={{backgroundImage:`url(${cat.icon})`,backgroundRepeat:'no-repeat',backgroundSize:"contain", backgroundPosition:''}}>
              </div>
              <div className='p-1 flex flex-col '>
                <Link href={`/${cat.parent}`} >
                  <h5 className='text-[10px] text-gray-600 hover:text-emerald-500 cursor-pointer'>{cat.parent}</h5>
                </Link>
              </div>
            </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default PagesTop