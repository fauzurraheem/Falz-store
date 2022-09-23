import React, { useContext, useState } from 'react'
import { Button, Drawer } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/cart/cartContext';
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import { Badge } from 'antd';
import { CartActions } from '../../context/cart/cartReducer';
import { RiShoppingBag3Fill} from 'react-icons/ri';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.config';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import SignInForm from '../signIn/SignInForm';
import SingUpForm from '../signIn/SignUpForm';


const CartDrawer = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [signIn , setSignIn] = useState(true)
  const [open, setOpen] = useState(false);
  const {state:{cart}, dispatch} = useContext(CartContext)
  const router = useRouter()
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const total = cart.reduce((product, amt) => (amt.__v * amt.price) + product, 0 )
  
  const proceed = () => {

    if (cart.length <= 0) {
      toast.error('Order before you can proceed')
      onClose()
    }else if(auth.currentUser === null){
      // toast.error('Login to place an Order')
      setModal1Open(true)
    }else{
      onClose()
      router.push('/checkout')
    }
  }
  

  return (
    <>
    <Badge size='small' count={cart.length} showZero offset={[0,5]}>
      <Button type="link" style={{padding:'0'}} onClick={showDrawer}>
        <FiShoppingCart color='white' size={25}/>
      </Button>
    </Badge>
      
      <Drawer 
        title={<div className='flex text-base items-center font-semibold '><BiShoppingBag size={20} /> <p className='m-0 ml-2'>Shopping Cart</p></div>} placement="right"headerStyle={{backgroundColor:'rgb(238, 242, 255)'}} 
        footer={<Button type="link" style={{ padding:'0',width:'100%'}}  onClick={proceed}>
          <div className='h-10 bg-emerald-500 rounded-md p-2 hover:bg-emerald-600 flex justify-between cursor-pointer'>
            <p className='text-white text-base m-0 align-middle '>Proceed To Checkout</p>
            <p className='bg-white text-emerald-500 w-[30%] h-full rounded-md align-middle text-base font-semibold flex items-center justify-center p-2 m-0'>N{total}</p>
          </div>
        </Button>}   
      onClose={onClose} open={open} bodyStyle={{padding:'0'}} footerStyle={{height:'4rem'}}>
        {cart.length === 0 &&
            <div className='w-full h-full flex items-center flex-col justify-center'>
              <span className='bg-gray-50 text-emerald-500 p-2 rounded-full'>
                <RiShoppingBag3Fill size={50} color=''/>
              </span>
               <h1 className='font-semibold text-base text-gray-500'>Your cart is empty</h1>
              <p className='text-xs text-gray-400'>No items added in your cart. Please add product to your cart list.</p>
            </div>
        }
        {cart.length !== 0 && 
          cart.map((item) => (
            <div className='flex p-2 text-sm hover:bg-gray-100' key={item._id}>
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
          ))
        }
      </Drawer>
      <Modal
        footer={null}
        style={{ top: 30, border:'none', textAlign:'center', }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        
      >
        {signIn ? <SignInForm setSignIn={setSignIn} setOpen={setModal1Open}/> : <SingUpForm setSignIn={setSignIn} setOpen={setModal1Open}/>}
        </Modal>
    </>
  )
}

export default CartDrawer