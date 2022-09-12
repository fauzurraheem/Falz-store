import React from 'react'

const Checkout = () => {
  return (
    <div className='p-8 flex flex-col md:flex-row bg-gray-50 '>
      <div className=''>
        <form>
          <div>
            <h1 className='text-base font-semibold text-gray-700'>.01 Personal Details</h1>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="name" className='text-gray-500'>Full Name</label>
                <input type="password" name="name" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' />
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="phone" className='text-gray-500'>Phone/Mobile</label>
                <input type="password" name="phone" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your phone Number' />
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="address" className='text-gray-500'>Your Address</label>
                <input type="password" name="address" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your address' />
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="email" className='text-gray-500'>Email Address</label>
                <input type="password" name="email" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='your email' />
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-base font-semibold text-gray-700'>.02 Shipping Details</h1>
            <div className='grid grid-row-3 gap-4'>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="name" className='text-gray-500'>Street address</label>
                <input type="text" name="address" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='123 Boulevard Rd, Beverley Hills' />
              </div>
              <div className='grid grid-cols-3 gap-4 text-sm'>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="name" className='text-gray-500'>City</label>
                  <input type="password" name="city" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Los Angeles' />
                </div>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="name" className='text-gray-500'>Country</label>
                  <input type="password" name="country" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='United States' />
                </div>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="name" className='text-gray-500'>Zip/Postal</label>
                  <input type="password" name="zip" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='2345' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <p className='text-sm text-gray-500'>Shipping Cost</p>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="name" className='text-gray-500'>Full Name</label>
                  <input type="password" name="name" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' />
                </div>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  <label htmlFor="name" className='text-gray-500'>Full Name</label>
                  <input type="password" name="name" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-base font-semibold text-gray-700'>.03 Payment Detail</h1>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="name" className='text-gray-500'>Full Name</label>
                <input type="password" name="name" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Full Name' />
              </div>
              <div className='grid grid-cols-1 gap-1 text-sm'>
                <label htmlFor="phone" className='text-gray-500'>Phone/Mobile</label>
                <input type="password" name="phone" className='py-3 px-3 rounded-md outline-none focus:border-emerald-500 border hover:border-emerald-500' placeholder='Your phone Number' />
              </div>
             
            </div>
          </div>
        </form>
      </div>
      <div className=''>
       
      </div>
    </div>
  )
}

export default Checkout