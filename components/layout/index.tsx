import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from '../Footer'
import Navbar from '../Navbar'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <>
    <div className='font-sans'>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </div>
    
    </>
    
  )
}

export default Layout