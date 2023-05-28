
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { product } from '../../context/products/products'
import { db } from '../../firebase.config'
import {AiOutlinePrinter} from 'react-icons/ai'
import { useReactToPrint } from 'react-to-print';
import Image from 'next/image'
import logo from '../../assets/webp/logo.svg'

export interface invoice {
  firstName:string
    lastName:string
    phone:number
    email:string
    streetAddress:string
    city:string
    country:string
    postal:number
    status:string
    Goods:product[]
    payment:string
    shipping:number
    isPaid:boolean
    Total:number
    timeStamp:date
} 

type date = {
  seconds:string
}

const Invoice = () => {
  const [product, setProduct] = useState<invoice>({} as invoice)
  const [loading, setLoading] = useState(true)
  const {query} = useRouter()
  const param = query.slug as string

  useEffect( () => {
    const getInvoice = async() => {
      const docRef = doc(db, "invoice", param);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data() as invoice)
        setLoading(false)
       
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    
    getInvoice()
  }, [])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
if (loading){
  return (<div className='h-[700px] w-full flex items-center justify-center'>Loading...</div>)
}


  const date = new Date(Number(product.timeStamp.seconds)*1000).toDateString() 
  return (
    <div className='bg-gray-50 py-8 px-6' ref={componentRef}>
      <p className='m-0 py-2 px-4 mb-4 bg-emerald-100 rounded-md text-base'>Thank you <span className='text-emerald-600 font-medium'>{product.firstName+' '+product.lastName}</span>, Your order have been received !</p>
      <div className='shadow-md text-gray-500'>
        <div className='bg-indigo-50 py-8 px-6 rounded-t-xl'>
          <div className='flex Sm:justify-between flex-col Sm:flex-row  Sm:items-center '>
            <p className='m-0 text-3xl font-medium mb-2 Sm:mb-0 text-gray-600'>INVOICE</p>
            <div className='Sm:w-[30%] w-full Sm:text-end flex flex-col'>
              <div className='flex items-center Sm:justify-end' >
                  <Image src={logo} width={50}  height={50} color='black'/>
                  <span className=' font-semibold  text-2xl '>Falz-Store</span>
              </div>
              <span className='m-0 '>Dutse Baupma,</span>
              <span className='m-0'> Bwari, Abuja,</span>
              <span className='m-0'>Nigeria</span>
            </div>
          </div>
          <hr className='bg-white my-4 h-[1px]'/>
          <div className='flex Sm:justify-between flex-col Sm:flex-row  Sm:items-center '>
            <div className='Sm:w-[20%] w-full flex flex-col mb-2 Sm:mb-0'>
              <span className='font-medium text-gray-600'>DATE</span>
              <span>{date}</span>
            </div>
            <div className='Sm:w-[20%] w-full flex flex-col mb-2 Sm:mb-0'>
              <span className='font-medium text-gray-600'>INVOICE NO.</span>
              <span>#10390</span>
            </div>
            <div className='Sm:w-[30%] w-full flex flex-col  Sm:text-end mb-2 Sm:mb-0'>
              <span className='font-medium text-gray-600'>INVOICE TO.</span>
              <span>{product.firstName+' '+product.lastName}</span>
              <span>{product.streetAddress}</span>
              <span>{product.city+', '+product.country+', '+product.postal}</span>
            </div>
          </div>
        </div>
        <div className='p-6'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-100 text-gray-600'>
                  <th className='px-2'>SR.</th>
                  <th className='px-2'>PRODUCT NAME</th>
                  <th className='px-2'>QUANTITY</th>
                  <th className='px-2'>ITEM PRICE</th>
                  <th className='px-2'>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.Goods.map((p,index) => (
                    <tr key={p._id} className='border border-gray-200'>
                      <td className='text-center'>{index + 1}</td>
                      <td className='text-center'>{p.title}</td>
                      <td className='text-center'>{p.__v}</td>
                      <td className='text-center'>N{p.price}</td>
                      <td className='text-center'>N{p.__v * p.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex Sm:justify-between flex-col Sm:flex-row  Sm:items-center bg-emerald-50 py-12 px-6'>
          <div className='flex flex-col mb-4 Sm:mb-0'>
            <span className='font-semibold  text-gray-600'>PAYMENT METHOD</span>
            <span className='font-medium'>{product.payment}</span>
          </div>
          <div className='flex flex-col mb-4 Sm:mb-0'>
            <span className='font-semibold text-gray-600'>SHIPPING COST</span>
            <span className='font-medium'>N{product.shipping}.00</span>
          </div>
          <div className='flex flex-col mb-4 Sm:mb-0'>
            <span className='font-semibold text-gray-600'>DISCOUNT</span>
            <span className='font-medium'>N0.00</span>
          </div>
          <div className='flex flex-col mb-4 Sm:mb-0'>
            <span className='font-semibold text-gray-600'>TOTAL AMOUNT</span>
            <span className='text-2xl text-red-500 font-semibold'>N{product.Total}.00</span>
          </div>
        </div>
        <div className='flex Sm:justify-between flex-col Sm:flex-row  Sm:items-center p-6'>
          <span className=''>Loading...</span>
          <button className='w-full Sm:w-[12rem] rounded-md py-2 text-white text-base bg-emerald-500 flex items-center justify-center' onClick={handlePrint}>
            <span className='m-0 mr-2'>Print Invoice</span>
            <AiOutlinePrinter size={20}/>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Invoice