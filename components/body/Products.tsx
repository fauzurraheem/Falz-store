import { product } from '../../context/products/products';
import {FaShoppingBag} from 'react-icons/fa'
import { Button, Modal } from 'antd';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { CartContext } from '../../context/cart/cartContext';
import { CartActions } from '../../context/cart/cartReducer';





interface ProductProps {
  product: product;
  
}



const Products:React.FC<ProductProps> = ({product}) => {
  const ImageUrl = product.image
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {state:{cart}, dispatch} = useContext(CartContext)




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

  
  const found = cart.find( p =>p._id === product._id ) 
  
  return (
    
    <div className='text-sm bg-white p-4 '>
      <div>
        <div>
        <Button type="link" style={{width:'100%', height:'200px'}} onClick={showModal}>
       <div className='flex justify-between items-start hover:scale-110' style={{backgroundImage: `url(${ImageUrl})`, width:'100%', height:'200px', backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
          {product.quantity === 0 && <span className='py-1 px-2 bg-orange-500 text-white text-xs rounded-2xl'>stock out</span>}
          {product.discount > 0 &&  <span className='py-1 px-2 bg-orange-500 text-white text-xs rounded-2xl'>{product.discount.toFixed()}% Off</span>}
        </div>
      </Button>
        </div>
        <div className=''>
          <span className='text-gray-300 text-'>{product.unit}</span>
          <h3 className='text-gray-500'>{product.title}</h3>
          <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-xl'>${product.price} {product.discount > 0  && <span className='text-sm text-gray-400 line-through align-middle font-normal'>${product.originalPrice}</span>}</h2>
            {
                cart.some(p => p._id === product._id ) ? <div className='p-2 border text-white border-gray-200 bg-emerald-500 flex items-center rounded-lg'>
                  <span onClick={reduceA} className='mx-2 font-semibold cursor-pointer' ><AiOutlineMinus /></span>
                  {cart.some(p => p._id === product._id ) && found && <span>{found.__v}</span>}
                  <span onClick={addAmount} className='mx-2 font-semibold cursor-pointer'><AiOutlinePlus /></span>
                </div> : <div className='hover:bg-emerald-500 hover:text-white text-base text-emerald-500 p-2 border border-gray-200 cursor-pointer'><FaShoppingBag size={20}  onClick={handleAdd} /></div> 
              }
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={900}>
        <div className='flex justify-between flex-col Sm:flex-row p-3 p'>
            <div className='flex justify-between items-start Sm:w-2/4 w-full' style={{backgroundImage: `url(${ImageUrl})`,  height:'300px', backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
          </div>
            <div className='Sm:w-[50%]'>
              <h3 className='text-gray-900 text-xl font-bold'>{product.title}</h3>
              {product.quantity !== 0 ? <span className='py-1 px-2 mb-7 bg-emerald-300 text-emerald-600 text-xs rounded-2xl font-semibold'>In stock</span> : <span className='py-1 px-2 bg-orange-500 text-white text-xs rounded-2xl'>stock out</span>}
              <p className='text-gray-500 text-sm'>{product.description}</p>
              <h2 className='font-semibold text-xl'>${product.price}</h2>
              <div className='flex justify-between'>
                <div className='p-1 px-4 w-[45%] border border-gray-400 flex justify-between rounded-lg  '>

                  {
                   cart.some(p => p._id === product._id ) && found ? <>
                    <button  className='text-4xl cursor-pointer hover:text-gray-400' onClick={reduceA}><AiOutlineMinus size={20} /></button>
                  <p className='text-2xl align-middle m-0 mt-1'>{found.__v}</p>
                  <button className='text-3xl cursor-pointer hover:text-gray-400' onClick={addAmount}><AiOutlinePlus size={20} /></button>
                    </> : <>
                    <button  className='text-4xl cursor-pointer text-gray-400'><AiOutlineMinus size={20}/></button>
                  <p className='text-2xl align-middle m-0 mt-1 text-gray-400'>0</p>
                  <button className='text-3xl cursor-pointer text-gray-400'><AiOutlinePlus size={20}/></button>
                    </>
                  }
                  
                      </div>
                {
                  cart.some(p => p._id === product._id ) ? 
                  (<div className='bg-emerald-500 w-[45%] rounded-lg text-gray-50 flex justify-center items-center cursor-pointer hover:bg-emerald-600' onClick={handleRemove}>
                  <span className=''>Remove From Cart</span>
                </div>) 
                  : (<div className='bg-emerald-500 w-[45%] rounded-lg text-gray-50 flex justify-center items-center cursor-pointer hover:bg-emerald-600' onClick={handleAdd}>
                  <span className=''>Add to Cart</span>
                </div>)
                }
                
              </div>
              <p className='font-semibold my-2 text-gray-600'>Category: <span className='text-gray-500'>{product.children}</span></p>
              <Link href={`/product/${product.slug}`}>
                <span className=' text-orange-500 cursor-pointer'>More Info</span>
              </Link>
            </div>
        </div>
      </Modal>
    </div>
    
  )
}

export default Products