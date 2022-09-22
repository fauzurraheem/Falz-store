import React, { useContext, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { product } from '../../context/products/products';
import { getAllProductsA, getChillProducts, getSlugProducts } from '../../utils/actions';
import { MdOutlineLocalShipping } from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { BiHomeAlt } from 'react-icons/bi';
import { FiDollarSign } from 'react-icons/fi';
import { AiOutlineReload } from 'react-icons/ai';
import {TiCancel } from 'react-icons/ti';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSun } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CartContext } from '../../context/cart/cartContext';
import { CartActions } from '../../context/cart/cartReducer';
import Products from '../../components/body/Products';


export interface HomePageProps {
  products: product[];
  
}

// export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
//   // const products:product[] = await getAllProducts()
//   // // console.log(typeof( products))
//   // const disProducts:product[] = await getDisProducts()
//   return { props: { 
//     // products,
//   } };
// }

const ProductDetails = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<product>({} as product)
  const [related, setRelated] = useState<product[]>([])

  const {query} = useRouter()
  const param = query.slug as string
  console.log(param)

  const {state:{cart},dispatch} = useContext(CartContext)
 const found = cart.find( p =>p._id === product._id ) 
  useEffect( () => {

    const Product = async() => {
      const product = await getSlugProducts(param)
      const related= await getChillProducts(product.children)
      setRelated(related)

      // transform()
      setProduct(product)
      setLoading(false)
      console.log(product+ 'you')
    }
    Product()

  }, [])
  const handleAdd = (e) => {
    dispatch({
      type:CartActions.Add_To_Cart,
      payload: product
    })
    
    
  }
  const addAmount = (e) => {
    dispatch({
      type:CartActions.Add_Amount,
      payload: product
    })
    
    
  }
  const reduceA = (e) => {
    dispatch({
      type:CartActions.Reduce_Amount,
      payload: product
    })
    
    
  }
  const handleRemove = (e) => {
    dispatch({
      type:CartActions.Remove_From_Cart,
      payload: product
    })

  }
  if (loading ){
    return <div className='h-[700px] w-full flex justify-center'>Loading...</div>
  }
  
 
  const sku = product._id.slice(18).toLowerCase()
  console.log(related)
  return (
    <div className='px-1 Sm:px-10 py-3 Sm:py-6 bg-gray-50'>
      <ul className='flex'>
        <Link href={'/'}>
        <li className='flex items-center font-semibold hover:text-emerald-500 cursor-pointer'>
          <span className=' mr-1'>Home</span>
          <MdOutlineKeyboardArrowRight />
        </li>
        </Link>
        <Link href={`/children/${product.children}`}>
        <li className='flex items-center font-semibold hover:text-emerald-500 cursor-pointer'>
          <span>{product.children}</span>
          <MdOutlineKeyboardArrowRight />
        </li>
        </Link>
        <li className='flex items-center'>
          <span>{product.title}</span>
        </li>
      </ul>
      <section className='bg-white flex lg:flex-row flex-col pb-6 md:p-7'>
        <div className='flex justify-between items-start w-full ' style={{backgroundImage: `url(${product.image})`,  height:'300px', backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
        </div>
        <div className='Sm:px-10 px-4 flex flex-col Sm:justify-between Sm:flex-row'>
          <article className='Sm:w-[50%]'>
            <div className=''>
              <h3 className='text-gray-900 text-xl font-bold'>{product.title}</h3>
              <h3 className='font-bold  text-gray-500'>SKU: <span className=' text-gray-700'>{sku}</span></h3>
              <h2 className='font-semibold text-xl mb-0'>N{product.price}</h2>
              {product.quantity !== 0 ? <span className='py-1 px-2 bg-emerald-300 text-emerald-600 text-xs rounded-2xl font-semibold'>In stock</span> : <span className='py-1 px-2 bg-orange-500 text-white text-xs rounded-2xl'>stock out</span>}
              <p className='text-gray-700 text-sm mt-2'>{product.description}</p>
              <div className='flex justify-between my-6 flex-col ph:flex-row'>
                <div className='p-1 px-4 w-fll ph:w-[45%] border border-gray-400 flex justify-between rounded-lg cursor-pointer mb-4 ph:mb-0 h-12 '>
                {
                   cart.some(p => p._id === product._id ) && found ? <>
                    <button  className='text-4xl cursor-pointer hover:text-gray-400' onClick={reduceA}>-</button>
                  <p className='text-2xl align-middle m-0 mt-1'>{found.__v}</p>
                  <button className='text-3xl cursor-pointer hover:text-gray-400' onClick={addAmount}>+</button>
                    </> : <>
                    <button  className='text-4xl cursor-pointer text-gray-400'>-</button>
                  <p className='text-2xl align-middle m-0 mt-1 text-gray-400'>0</p>
                  <button className='text-3xl cursor-pointer text-gray-400'>+</button>
                    </>
                  }
                </div>
                {
                  cart.some(p => p._id === product._id ) ? 
                  (<div className='bg-emerald-500 w-full  ph:w-[45%] rounded-lg text-gray-50 flex justify-center items-center cursor-pointer hover:bg-emerald-600 h-12' onClick={handleRemove}>
                  <span className=''>Remove From Cart</span>
                </div>) 
                  : (<div className='bg-emerald-500 w-full  ph:w-[45%] rounded-lg text-gray-50 flex justify-center items-center cursor-pointer hover:bg-emerald-600 h-12' onClick={handleAdd}>
                  <span className=''>Add to Cart</span>
                </div>)
                }
              </div>
              <p className='font-semibold my-2 text-gray-700'>Category: <span className='text-gray-500 font-medium'>{product.children}</span></p>
            </div>
            <div>
              <h5>Share your social network</h5>
              <p>For get lots of traffic from social network share this product</p>
              <div>
                {/* icons */}
              </div>
            </div>
          </article>
          <article className=' w-full Sm:w-[40%]
           '>
            <div className='bg-gray-50 rounded-xl text-xs  p-4'>
              <div className='flex items-center my-4'>
                <MdOutlineLocalShipping size={25} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'>Free shipping apply to all orders over shipping <span className='font-semibold'>$100</span></p>
              </div>
              <div className='flex items-center my-4'>
                <BiHomeAlt size={20} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'>Home Delivery within <span className='font-semibold'>1</span>  Hour</p>
              </div>
              <div className='flex items-center my-4'>
                <FiDollarSign size={20} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'>Cash on Delivery Available</p>
              </div>
              <div className='flex items-center my-4'>
                <AiOutlineReload size={20} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'><span className='font-semibold'>7</span>  Days returns money back guarantee</p>
              </div>
              <div className='flex items-center my-4'>
                <TiCancel size={20} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'>Warranty not available this item</p>
              </div>
              <div className='flex items-center my-2'>
                <FiSun size={20} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500 my-3'>Guaranteed 100% organic from natural products.</p>
              </div>
              <div className='flex items-center my-3'>
                <HiOutlineLocationMarker size={30} color='rgb(107, 114, 128)'/>
                <p className='m-0 ml-3 text-gray-500'>Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <p className='text-xl font-semibold my-5'>Related Products</p>
      <div className='grid md:grid-cols-5 ph:grid-cols-2 sm:grid-cols-3  gap-4 my-12'>
      {
        related.map((rel) => (
          <Products product={rel} key={rel._id}/>
        ))
      }
      </div>
    </div>
  )
}

export default ProductDetails