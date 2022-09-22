import React, { useEffect, useState } from 'react'
import { FiUnlock} from 'react-icons/fi';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import { GrUnorderedList} from 'react-icons/gr';
import { AiOutlineSetting} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FcProcess } from 'react-icons/fc';
import { GiCheckMark } from 'react-icons/gi';
import { RiShoppingBag3Fill} from 'react-icons/ri';
import Link from 'next/link';
import { auth, db } from '../../firebase.config';
import {useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { GetServerSideProps} from 'next'
import { invoice } from '../order/[slug]';


// export const getServerSideProps: GetServerSideProps = async () => {
//   const querySnapshot = await getDocs(collection(db, "invoice"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
  

//      return { props: { 
     
//    } };

// }

export interface order {
  id:string
  data:invoice
}
const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [order, setOrder] = useState<order[]>([])

  useEffect(() => {
    const getData = async() => {
      const orders = (collection(db, "invoice"))
      const q = query(orders, where('userRef', '==', auth.currentUser.uid), orderBy('timeStamp', 'desc'),limit(100))
      const querySnapshot = await getDocs(q)

      const listings = []

        querySnapshot.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setOrder(listings)
        setLoading(false)
    }
    getData()
  },[])
 
  const logOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    signOut(auth).then(() => {
      router.push('/')
      toast.success("LogOut Successfull");
    });
    
  }

  return (
    <div className='py-8 px-4 sm:px-8 flex flex-col md:flex-row bg-gray-50 md:justify-between'>
      <div className=' h-[20rem] md:w-[25%] rounded-lg bg-white p-6 text-sm md:sticky top-32'>
        <Link href={'/user/dashboard'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <MdOutlineDashboardCustomize />
            <p className='mx-2 cursor-pointer m-0'>Dashboard</p>
        </div>
        </Link>
        <Link href={'/user/order'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <GrUnorderedList />
            <p className='mx-2 cursor-pointer m-0'>My Order</p>
        </div>
        </Link>
        <Link href={'/user/profile'}>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <AiOutlineSetting />
            <p className='mx-2 cursor-pointer m-0'>Update Profile</p>
        </div>
        </Link>
        <Link href={'/user/password'}>
        <div className='flex items-center hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4'>
          <AiOutlineFileText />
            <p className='mx-2 cursor-pointer m-0'>Change Password</p>
        </div>
        </Link>
        <div className='flex items-center py-2 hover:text-emerald-600 hover:bg-gray-50  rounded-md p-2 my-4 cursor-pointer' onClick={logOut}>
          <FiUnlock />
          <p className='mx-2 cursor-pointer m-0' >Logout</p>
        </div>
      </div>
      <div className=' rounded-lg md:w-[70%] bg-white p-6 sticky top-60 lg:top-32 mt-8 md:mt-0'>
        <div>
          <h3 className='text-xl font-bold my-2'>Dashboard</h3>
        </div>
        <div className='py-4 grid sm:grid-cols-1 md:grid-cols-4 gap-4 text-xs'>
          <div className='rounded-xl  py-4 px-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-red-200 text-red-600'>
            <FiShoppingCart size={20}/>
            </div>
            <div className='ml-2'>
              <p className='m-0'>Total</p>
              <p className='font-semibold text-sm m-0'>{order.length}</p>
             </div>
          </div>
          <div className='rounded-xl   p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-orange-200 text-orange-600'>
              <FcProcess size={20}/>
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Pending Order</p>
              <p className='font-semibold text-sm m-0'>{order.length}</p>
             </div>
          </div>
          <div className='rounded-xl  p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-indigo-200 text-indigo-600'>
            <MdOutlineLocalShipping size={20} />
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Processing Order</p>
              <p className='font-semibold  text-sm m-0'>0</p>
             </div>
          </div>
          <div className='rounded-xl  p-2 border border-gray-200 flex'>
            <div className='rounded-full w-8 h-8 flex justify-center items-center bg-emerald-200 text-emerald-600'>
              <GiCheckMark size={20}/>
            </div>
            <div className='ml-2'>
              <p className=' m-0'>Complete Order</p>
              <p className='font-semibold text-sm m-0'>0</p>
             </div>
          </div>
        </div>
        {
          loading ? <div className='w-full h-20 flex justify-center'>loading...</div> : <>{order.length <= 0 ? 
          <div className=' flex flex-col items-center h-36 justify-center'>
          <h3 className='my-4 m-0 text-gray-400'>No Orders yet</h3>
          <div className='text-emerald-600 text-center m-0'>
            <RiShoppingBag3Fill size={50} />
          </div>
          </div>
          : 
          <div className='overflow-x-auto'>
          <div className=' flex flex-col items-center min-h-36 justify-center  min-w-[500px] overflow-hidden'>
          <table className='w-full'>
              <thead>
                <tr className='bg-gray-100 text-gray-600'>
                  <th className='py-2'>ID</th>
                  <th className='px-2'>ORDER TIME</th>
                  <th className='px-2'>METHOD</th>
                  <th className='px-2'>STATUS</th>
                  <th className='px-2'>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {
                  order.map((item) => (
                    <tr key={item.id} className='border border-gray-200'>
                      <td className='text-center'>{item.id.slice(16).toUpperCase()}</td>
                      <td className='text-center'>{new Date(Number(item.data.timeStamp.seconds) * 1000 ).toDateString()}</td>
                      <td className='text-center'>{item.data.payment}</td>
                      <td className='text-center text-orange-400'>{item.data.status}</td>
                      <td className='text-center font-semibold'>N{item.data.Total}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
          </div>}</>
        }
        
      </div>
    </div>
  )
}

export default Dashboard