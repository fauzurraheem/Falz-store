import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Products from '../components/body/Products'
import { AuthContextProvider } from '../context/auth/authcontext'
import { product } from '../context/products/products'
import { getAllProducts, getDisProducts } from '../utils/actions'
import image6 from '../assets/webp/image6.webp'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";
import image10 from '../assets/webp/image10.webp'
import image11 from '../assets/webp/image11.webp'
import Link from 'next/link';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { categoryArr } from '../data/category'
import { t } from './offer'



export interface HomePageProps {
  products: product[];
  disProducts:product[];
}

export const getStaticProps: GetStaticProps<HomePageProps>= async () => {
  const products:product[] = await getAllProducts()
  // console.log(typeof( products))
  const disProducts:product[] = await getDisProducts()
  return { props: { 
    products,
    disProducts 
  } };
};


const Home:React.FC<HomePageProps> = ({products,disProducts}) => {

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
    <AuthContextProvider>
      <div className='border-box'>
      <Head>
        <title>Falz-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sales.ico" />
      </Head>
      <div className='py-2 px-4 Sm:px-8'>
        <div className='flex gap-3 justify-between'>
            <div className='md:w-3/5 w-full'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
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
                style={{ height:'90%'}}
              >
                <SwiperSlide key={1}>
                <div className=' w-full h-full rounded-lg flex justify-center items-start flex-col px-4 py-4' style={{backgroundImage:`url(/image7.webp)`,backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:"100%"}}>
                    <h1 className='text-2xl font-semibold w-[60%] line-clamp-1 md:line-clamp-none leading-7 '>The Best Quality Product Guaranteed!</h1>
                    <p className='mb-6 w-[60%] leading-6  text-gray-600 line-clamp-1 md:line-clamp-none'>Dramatically facilitate effective total linkage for go forward processces</p>
                    <span className='bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6 hidden Sm:block m-0'>Shop Now</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={2}>
                <div className=' w-full h-full rounded-lg flex justify-center items-start flex-col px-4' style={{backgroundImage:`url(/image8.webp)`,backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:"100%"}}>
                <h1 className='text-2xl font-semibold w-[60%] m-0 line-clamp-1 md:line-clamp-none leading-7'>The Best Quality Product Guaranteed!</h1>
                    <p className='mb-6 w-[60%] leading-6  text-gray-600 line-clamp-1 md:line-clamp-none'>Dramatically facilitate effective total linkage for go forward processces</p>
                    <span className='bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6 hidden Sm:block m-0'>Shop Now</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={3}>
                <div className=' w-full h-full rounded-lg flex justify-center items-start flex-col px-4' style={{backgroundImage:`url(/image9.webp)`,backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:"100%"}}>
                <h1 className='text-2xl font-semibold w-[60%] m-0 hidden line-clamp-1 md:line-clamp-none leading-7'>The Best Quality Product Guaranteed!</h1>
                    <p className='mb-6 w-[60%] leading-6 text-gray-600 line-clamp-1 md:line-clamp-none'>Dramatically facilitate effective total linkage for go forward processces</p>
                    <span className='bg-emerald-500 cursor-pointer w-[8rem] text-center py-2 rounded-lg text-gray-50 px-6 mb-6 hidden Sm:block m-0'>Shop Now</span>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
          <div className='w-2/5 max-w-[500px] border-2 border-orange-500 bg-gray-100 text-sm text-gray-500 hidden md:block'>
            <h5 className='w-full text-center bg-orange-100 m-0 text-black py-3 '>Latest Super Discount Active Coupon Code</h5>
            <div className=' text-sm'>
              <div className='flex w-[95%] m-2 shadow'>
                <div className='w-[70%]  flex rounded-md bg-white border-r-4 border-dashed border-gray-300'>
                  <div className='pl-4 flex items-center rounded-2xl overflow-hidden'>
                    <Image src={image11} width={70} height={80} objectFit="cover"/>
                  </div>
                  <div className='ml-2 p-1 flex flex-col justify-center text-xs'>
                    <p className='m-0'> <span className='text-base font-semibold text-red-600'>10% </span>Off <span className='py-1 px-3 bg-red-200 text-red-600 rounded-xl'>Inactive</span> </p>
                    <p className='mb-0'> Summer Gift Voucher</p>
                    <p className='mt-2 text-gray-50 font-semibold m-0'> <span className='p-1 rounded bg-red-400'>00</span>  : <span className='p-1 rounded bg-red-400'>00</span> : <span className='p-1 rounded bg-red-400'>00</span></p>
                  </div>
                </div>
                <div className='w-[30%] p-2 text-xs bg-white flex flex-col justify-center rounded-md'>
                  <div className='w-full text-sm bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
                      <button className='w-full'>
                        <span className='w-full'>Summer 22</span>
                      </button>
                  </div>
                  <p className='m-0'> * This coupon apply when shopping more then $500</p>
                </div>
              </div>
                <div className=' flex w-[95%] m-2 shadow'>
                  <div className='w-[70%]  flex  rounded-md bg-white border-r-4 border-dashed border-gray-300'>
                    <div className='rounded-xl  overflow-hidden pl-4 flex items-center'>
                      <Image src={image10} width={70} height={70}/>
                    </div>
                    <div className='ml-2 flex flex-col justify-center text-xs'>
                      <p className='m-0'> <span className='text-base font-semibold text-red-600'>15% </span>Off <span className='py-1 px-3 bg-emerald-200 text-emerald-600 rounded-xl'>Active</span> </p>
                      <p className='m-0'> Winter Gift Voucher</p>
                      <p className='mt-2 text-black m-0'><span className='p-1 rounded bg-emerald-200'>{timeLeft.days}</span>  : <span className='p-1 rounded bg-emerald-200'>{timeLeft.hours}</span>  : <span className='p-1 rounded bg-emerald-200'>{timeLeft.minutes}</span> : <span className='p-1 rounded bg-emerald-200'>{timeLeft.seconds}</span></p>
                    </div>
                  </div>
                  <div className='w-[30%] p-2 text-xs  bg-white flex flex-col justify-center rounded-md'>
                    <div className='w-full text-sm bg-emerald-50 border-dashed border border-emerald-200 text-emerald-500 rounded-lg font-semibold py-1 m-auto'>
                      <button className='w-full' onClick={() => {navigator.clipboard.writeText('Winter 22')}}>
                        <span className='w-full' onClick={() => setText('Copied!')}>{text}</span>
                      </button>
                    </div>
                    <p className='m-0'> * This coupon apply when shopping more then $500</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='p-6 bg-orange-100 mt-10 md:flex justify-between items-center rounded-lg hidden '>
          <div>
            <p className='text-lg m-0'><span className='font-semibold text-emerald-600 m-0'>100% Natural Quality</span> Organic Product</p>
            <p className='text-sm text-gray-500 m-0'>See Our latest discounted products from here and get a <span className='text-emerald-500 m-0 '>specialdiscount product</span> </p>
          </div>
          <button className='h-9 px-6 text-sm bg-emerald-500 text-gray-100 rounded-3xl'>Shop now</button>
        </div>
      </div>
      <div className='bg-gray-100 sm:p-10 py-6 px-2 text-xs '>
        <div className='mb-9 text-center'>
          <h4 className='text-lg font-medium m-0'>Featured Categories</h4>
          <p className='text-sm text-gray-600 m-0'>Choose your necessary products from this feature categories.</p>
        </div>
        <div className='grid md:grid-cols-5 sm:grid-cols-3 ph:grid-cols-2 text-gray-400 gap-px'>
          {
            categoryArr.map((cat, index) => (
              <div className='flex bg-white p-3' key={cat._id}>
                <div className='w-2/4 h-full max-w-[2rem]' style={{backgroundImage:`url(${cat.icon})`,backgroundRepeat:'no-repeat',backgroundSize:"contain"}}>
                </div>
                <div className='p-1 flex flex-col '>
                  <Link href={`/${cat.parent}`} >
                    <h5 className='text-sm text-gray-600 hover:text-emerald-500 cursor-pointer m-0'>{cat.parent}</h5>
                  </Link>
                    {cat.children.map((chil,index)=> (
                    <div className='flex items-center' key={index}>
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
      
      <div className='bg-gray-50 sm:p-10 p-4'>
        <div className='text-center mx-auto my-6 lg:w-[60%]'>
          <h3 className='text-lg font-medium'>Popular Products for Daily Shopping</h3>
          <p className='text-gray-500 text-sm '>
          See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.
          </p>
        </div>
        <div className='grid md:grid-cols-4 lg:grid-cols-6 ph:grid-cols-2 sm:grid-cols-3  gap-4 my-12'>

          {
          products.map((product, index) => (
            <Products product={product} key={index}/>
          ))
          }
        </div>
        <div className='md:p-14 p-6 rounded-lg bg-emerald-500'>
          <div className='md:p-6 p-5 flex justify-between bg-white rounded-lg'>
            <div className=''>
              <span>
              Organic Products and Food
              </span>
              <h3 className='text-2xl font-semibold'>
              Quick Delivery to <span className='text-emerald-500'>Your Home</span> 
              </h3>
              <p className='text-sm mb-3'>
              There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.
              </p>
              <button className='text-xs bg-emerald-500 md:py-3 md:px-10  py-2 px-2   rounded-3xl text-gray-50 sm:w-[30%] w-[70%]'>
                Download App
              </button>
            </div>
            <div className='  md:flex items-center hidden'>
              <Image src={image6} width={350} height={200} quality={100} />
            </div>
          </div>
        </div>
        <div className='text-center mx-auto my-12 lg:w-[60%]'>
          <h3 className='text-lg font-medium'>Latest Discounted Products</h3>
          <p className='text-gray-500 text-sm '>
          See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping.
          </p>
        </div>
        <div className='grid md:grid-cols-5 ph:grid-cols-2 sm:grid-cols-3  gap-4 my-12'>
          {
          disProducts.map((product, index) => (
            <Products product={product} key={index}/>
          ))
          }
        </div>
        
      </div>
    
    </div>
    </AuthContextProvider>
    
  )
}

export default Home
