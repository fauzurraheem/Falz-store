import React, { useContext, useEffect } from 'react'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RiWallet3Fill } from 'react-icons/ri'
import { GoCreditCard } from 'react-icons/go'
import { TbArrowBackUp } from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi'
import { Avatar, Divider, List, Skeleton } from 'antd';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CartContext } from '../context/cart/cartContext'
import { CartActions } from '../context/cart/cartReducer'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiLoader} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import Link from 'next/link'
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase.config'
import { toNamespacedPath } from 'node:path/win32'
import { toast } from 'react-toastify'
import PaystackPop   from '@paystack/inline-js'
import { useRouter } from 'next/router'




const Checkout = () => {

  const[shipping, setShipping] = useState(0)
  const [payment, setPayment] = useState('')
  const [loading, setLoading] = useState(false)
  const [isPaid, setisPaid] = useState(false)
  const {state:{cart}, dispatch} = useContext(CartContext)
  const total = cart.reduce((product, amt) => (amt.__v * amt.price) + product, 0 )
  const router = useRouter()
  const Total = total + shipping;
  
  
    

  
  const [goods, setGoods] = useState(cart)
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    phone:Number(''),
    email:'',
    streetAddress:'',
    city:'',
    country:'',
    postal:Number(''),
    status:'pending',
    Goods:goods,
    
  })

  const {firstName,lastName,email,streetAddress,phone,city,postal,country} = formData


  
  const onMutate = (e) => {
      
      if(!e.target.files){
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
  }
  

  const handleSubmit =  async(e)=> {
    setLoading(true)
    e.preventDefault()
    setGoods(cart)
    if(payment === 'Card'){
      setisPaid(true)
    }
    const formDataCopy = {
      ...formData,
      timeStamp:serverTimestamp(),
      userRef: auth.currentUser.uid,
      payment,
      shipping,
      isPaid,
      Total
    }
    if(payment !== 'cash'){
      // const paystack = new PaystackPop()
      // paystack.newTransaction({
      //   key:"pk_test_5e8fb19405d0aeb9965c6ef8fe96d0265d059926",
      //   amount: Total*100,
      //   firstName,
      //   lastName,
      //   email,
      //   async onSuccess(){
      //     try {
      //       console.log(formDataCopy)
      //       const docRef = await addDoc(collection(db,  'invoice'),formDataCopy)
      //       console.log(docRef.id)
      //       toast.success('Payment Succesfull, Order Taken')
      //       router.push(`/order/${docRef.id}`)
      //     } catch (error) {
      //       toast.error('Connection Problem')
      //       console.log(error)
      //       setLoading(false)
      //     }
      //   },
      //   onCancel(){
      //     toast.error('Poor Connection, Please Try Again')
      //   }
      // })
      const docRef = await addDoc(collection(db,  'invoice'),formDataCopy)
     console.log(docRef.id)
      toast.success('Payment Succesfull, Order Taken')
      router.push(`/order/${docRef.id}`)
      
    } else {
      try {
        const docRef = await addDoc(collection(db,  'invoice'),formDataCopy)
        toast.success('Order Taken')
        router.push(`/order/${docRef.id}`)
      } catch (error) {
        toast.error('Connection Problem')
        console.log(error)
        setLoading(false)
      }
    }
    
    
    


  }



  return (
    <div className='py-8 px-2 sm:px-6 justify-between flex flex-col-reverse md:flex-row bg-gray-50 '>
      <div className='w-full md:w-[60%] mt-10 md:m-0'>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <h1 className='text-base font-semibold text-gray-700'>.01 Personal Details</h1>
            <div className='grid Sm:grid-cols-2 gap-4'>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="name" className='text-gray-500'>Full Name</label>
                <input type="text" name="firstName" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' value={firstName} onChange={onMutate}/>
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="phone" className='text-gray-500'>Phone/Mobile</label>
                <input type="text" name="phone" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your phone Number' value={phone} onChange={onMutate}/>
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="lastName" className='text-gray-500'>Last Name</label>
                <input type="text" name="lastName" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your address'value={lastName} onChange={onMutate} />
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="email" className='text-gray-500'>Email Address</label>
                <input type="email" name="email" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='your email' value={email} onChange={onMutate}/>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <h1 className='text-base font-semibold text-gray-700'>.02 Shipping Details</h1>
            <div className='grid grid-row-3 gap-4'>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="S.address" className='text-gray-500'>Street address</label>
                <input type="text" name="streetAddress" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='123 Boulevard Rd, Beverley Hills' value={streetAddress} onChange={onMutate}/>
              </div>
              <div className='grid Sm:grid-cols-3 gap-4 text-sm'>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="city" className='text-gray-500'>City</label>
                  <input type="text" name="city" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Los Angeles' value={city} onChange={onMutate}/>
                </div>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="contry" className='text-gray-500'>Country</label>
                  <input type="text" name="country" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='United States' value={country} onChange={onMutate}/>
                </div>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="zip" className='text-gray-500'>Zip/Postal</label>
                  <input type="text" name="postal" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='2345' value={postal} onChange={onMutate}/>
                </div>
              </div>
              <div>
                 <label className='text-sm text-gray-500 m-0' htmlFor='shipping'>Shipping Cost</label>
                <div className='grid Sm:grid-cols-2 gap-4 text-xs'>
                  <div className='flex text-sm items-center justify-between p-2 bg-white border border-gray-100 rounded-lg'>
                    <div  className='flex items-center text-gray-400'>
                      <MdOutlineLocalShipping size={25}/>
                      <div className='ml-4'>
                        <h3 className='m-0 text-sm text-gray-500 font-normal'>FedEx</h3>
                        <p className='m-0 text-xs text-gray-400'>Delivery: Today Cost : $60.00</p>
                      </div>
                    </div>
                    <input type="radio" value={shipping} onClick={(e) => setShipping(60)} name="shipping" className='py-3 px-3 outline-none focus:border-emerald-500 border hover:border-emerald-500 rounded-full' placeholder='Full Name'/>
                  </div>
                  <div className='flex text-sm items-center justify-between p-2 bg-white border border-gray-100 rounded-lg'>
                    <div  className='flex items-center text-gray-400'>
                      <MdOutlineLocalShipping size={25}/>
                      <div className='ml-4'>
                        <h3 className='m-0 text-sm text-gray-500 font-normal'>UPS</h3>
                        <p className='m-0 text-xs text-gray-400'>Delivery: 7 Days Cost : $20.00</p>
                      </div>
                    </div>
                    <input type="radio" name="shipping" value={shipping} onClick={(e) => setShipping(20)} className='py-3 px-3 outline-none focus:border-emerald-500 border hover:border-emerald-500 rounded-full' placeholder='Full Name' style={{backgroundColor:'green', color:'green'}}/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className='mb-6'>
            <label htmlFor='payment' className='text-base font-semibold text-gray-700'>.03 Payment Detail</label>
            <div className='grid Sm:grid-cols-2 gap-4 text-xs'>
              <div className='flex text-sm items-center justify-between p-2 bg-white border border-gray-100 rounded-lg'>
                <div  className='flex items-center text-gray-400'>
                  <RiWallet3Fill size={25}/>
                  <div className='ml-4'>
                    <h3 className='m-0 text-sm text-gray-500 font-normal'>Cash On Delivery</h3>
                  </div>
                </div>
                <input type="radio" name="payment" value={payment} onClick={(e) => setPayment('COD')} className='py-3 px-3 outline-none focus:border-emerald-500 border hover:border-emerald-500 rounded-full' placeholder='Full Name'/>
              </div>
              <div className='flex text-sm items-center justify-between p-2 bg-white border border-gray-100 rounded-lg'>
                <div  className='flex items-center text-gray-400'>
                  <GoCreditCard size={25}/>
                  <div className='ml-4'>
                    <h3 className='m-0 text-sm text-gray-500 font-normal'>Credit Card</h3>
                  </div>
                </div>
                <input type="radio" name="payment" value={payment} onClick={(e) => {setPayment('Card'); setisPaid(true)}} className='py-3 px-3 outline-none focus:border-emerald-500 border hover:border-emerald-500 rounded-full' placeholder='Full Name'/>
              </div>
            </div>
          </div>
          <div>
            <div className='grid Sm:grid-cols-2 gap-4 text-xs'>
              <Link href={'/'} >
                <div className='flex text-sm items-center justify-center  py-3 bg-indigo-50 border border-gray-200 rounded-md text-gray-700 cursor-pointer hover:border-gray-300'>
                  <TbArrowBackUp size={20}/>
                <p className='m-0 ml-2'>Continue Shopping</p>
                </div>
              </Link>
              {loading ? 
                <button type='submit' className='flex text-sm  items-center justify-center py-3 bg-emerald-500 hover:bg-emerald-600  rounded-md text-white cursor-pointer' >
                <p className='m-0 ml-2'>Processing</p>
                <BiLoader size={15} />
                </button> 
              : 
                <button type='submit' className='flex text-sm  items-center justify-center py-3 bg-emerald-500 hover:bg-emerald-600  rounded-md text-white cursor-pointer' >
                <p className='m-0 ml-2'>Confirm</p>
                <HiArrowRight size={15} />
                </button>  
             }
              
            </div>
          </div>
        </form>
      </div>
      <div className='w-full md:w-[35%]'>
        <div className='bg-white rounded-md border border-gray-300 py-6 px-3'>
        <h1 className='text-lg font-bold'>Order Summary</h1>
        <div
          id="scrollableDiv"
          style={{
            height: 300,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }} className='mb-6 rounded-md'
        >
          <InfiniteScroll
            dataLength={cart.length}
            next={()=> (console.log('no-more'))}
            hasMore={cart.length < cart.length}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={cart}
              renderItem={item => (
                <List.Item key={item._id}>
                <div className='flex p-2 text-sm hover:bg-gray-100 w-full'>
                  <div className=' object-cover flex items-center'>
                    <img src={item.image} width={50} height={50} style={{borderRadius:'50%',border:'1px solid lightgray'}}/>
                  </div>
                  <div className='p-1 ml-2 w-[85%]'>
                    <p className='m-0 text-gray-600'>{item.title}</p>
                    <p className='mb-1 text-xs text-gray-400'>Item Price N{item.price}</p>
                    <div className='flex items-center justify-between text-sm font-normal'>
                      <div>N{item.price * item.__v}</div>
                      <div className='p-1 bg-white border border-gray-100 rounded-lg w-[30%] flex justify-between items-center' >
                          <AiOutlineMinus onClick={() => dispatch({type:CartActions.Reduce_Amount,payload: item})}/>
                        <span>{item.__v}</span>
                          <AiOutlinePlus   onClick={() => dispatch({type:CartActions.Add_Amount,payload: item})}/>
                      </div>
                      <div className='text-red-400 hover:text-red-600'>
                        <AiOutlineDelete size={20}  onClick={() => dispatch({type:CartActions.Remove_From_Cart,payload: item})}/>
                      </div>
                    </div>
                  </div>
                </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>

        <div className='flex justify-between mb-6'>
          <input type="text" className='py-3 px-3 w-[67%] rounded-md outline-none focus:border-emerald-500 border active:border-emerald-500' placeholder='Input Your Coupon Code' />
          <button className='p-2 border border-gray-300 text-black text-base font-medium rounded-md w-[30%] hover:bg-emerald-500 hover:text-white'>Apply</button>
        </div>
        <div>
          <div className='flex justify-between  font-medium mb-3'>
            <span className='text-gray-500'>Subtotal</span>
            <span className='text-gray-800 font-semibold'>N{total}.00</span>
          </div>
          <div className='flex justify-between font-medium mb-3'>
            <span className='text-gray-500'>Shipping Cost</span>
            <span className='text-gray-800 font-semibold'>N{`${shipping}`}.00</span>
          </div>
          <div className='flex justify-between font-medium mb-3'>
            <span className='text-gray-500'>Discount</span>
            <span className='text-orange-500'>N0.00</span>
          </div>
        </div>
        <hr />
        <div className='flex justify-between font-bold text-black mt-3'>
          <span className='text-base'>Total</span>
          <span className='text-lg'>N{Total}.00</span>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default Checkout