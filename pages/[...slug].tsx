import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import notfound from'../assets/webp/notfound.svg'

const NotFound = () => {
  return (
    <div className='flex flex-col  items-center'>
      <Image  src={notfound} width={800} height={800}/>
      <Link href={'/'}>
        <div className='w-[40%] text-center bg-emerald-500 py-2 rounded-md text-white mb-4 cursor-pointer'>
          Back to home 
        </div>
      </Link>
    </div>
  )
}

export default NotFound