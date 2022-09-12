import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Products from '../components/body/Products'
import Tbody from '../components/body/Tbody'
import { AuthContextProvider } from '../context/auth/authcontext'
import { product } from '../context/products/products'
import { getAllProducts, getDisProducts } from '../utils/actions'
import image6 from '../assets/webp/image6.webp'
import Image from 'next/image'

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
  console.log(products)
  console.log(disProducts)
  return (
    <AuthContextProvider>
      <div className='border-box'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tbody />
      
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
