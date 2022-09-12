import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from './Footer'
import Navbar from './Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from '../../context/products/products';
import { CartProvider } from '../../context/cart/cartContext';

const Layout = ({children}) => {
  return (
    <>
    <CartProvider>
      <ProductProvider>
        <div className='font-sans'>
              <Navbar />
              {children}
              <Footer />
              <ToastContainer />
        </div>
      </ProductProvider>
    </CartProvider>
    </>
  )
}

export default Layout