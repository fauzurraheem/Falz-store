import React, { useContext, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {MdNotificationsNone} from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser} from 'react-icons/fi';
import { FaShoppingBag} from 'react-icons/fa';
import { FiPhoneCall} from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMenuAlt1 } from 'react-icons/hi';
import Link from 'next/link';
import { AuthContext } from '../../context/auth/authcontext';
import { auth } from '../../firebase.config';
import { useRouter } from 'next/router';
import Display from './DisplayName';
import { RiArrowDownSFill } from 'react-icons/ri';
import { categoryArr } from '../../data/category';
import { Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import {RiCloseCircleFill} from 'react-icons/ri'
import {AiOutlineGift} from 'react-icons/ai'
import {BiCheckCircle} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {MdOutlinePrivacyTip } from 'react-icons/md'
import {HiPhoneIncoming} from 'react-icons/hi'
import {AiOutlineFileText} from 'react-icons/ai'
import {BsExclamationCircle} from 'react-icons/bs'
import {MdPeopleOutline} from 'react-icons/md'
import logoC from '../../assets/webp/logolight.svg'
import Image from 'next/image';
import { Button, Drawer } from 'antd';
import CartDrawer from '../cart/CartDrawer';
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';



const Navbar = () => {
const [Input, setInput] = useState('')
  const [subD, setSubD] = useState(false)
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  console.log(Input)
  const router = useRouter()




  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
    setOpen(false)
  };

 const user = useContext(AuthContext)
 
 console.log(subD)
 const treeData: DataNode[] = 
  categoryArr.map((cat, index) => ({
    title:(<div className='flex items-center  text-sm'>
    <div className='h-5 w-5' style={{backgroundImage:`url(${cat.icon})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
  </div>
    <div className='p-1 flex flex-col '>
    <h5 className=' text-black cursor-pointer ml-3 m-0'>{cat.parent}</h5> 
    </div>
  </div>),
  key: `0-${index}`,
  children:cat.children.map((chil, index) => ({
    title:(<Link href={`/${chil}`}>
    <h5 className=' text-black hover:text-emerald-700 cursor-pointer m-0' onClick={onChildrenDrawerClose}>{chil}</h5>
    </Link>),
    key:`0-0-${index}`,
  }))
    
}))
  

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(Input)
    router.push(`/search/${Input}`)
    setInput('')
  }


 





  
  return (
    <>
        <div className='md:flex h-6 z-[1060] justify-between text-xs items-center px-9 bg-gray-100  text-[.8rem]	hidden ' >
          <div className='flex items-center '>
            <FiPhoneCall />
            <p className='pl-1 text-gray-700 m-0' >
              We are available 24/7, Need help? Call Us: <span className='text-emerald-500 font-semibold'>+01234560352</span>
            
            </p>
          </div>
          <div className='flex items-center'>
            <p className='border-r border-gray-700 px-3 text-gray-700 m-0' >About Us</p>
            <p className='border-r border-gray-700 px-3 text-gray-700 m-0'>Contact Us</p>
            <p className='border-r border-gray-700 px-3 text-gray-700 m-0' >my Account</p>
            <p className=' px-3 text-gray-700 m-0'>login</p>
          </div>
        </div>
    
      <div className='flex flex-col  z-10 w-full sticky top-0'>
        <div className=''>
        <div className='flex items-center justify-center md:justify-between bg-emerald-500	px-9 static top-0 h-[65px]  '>
          <Link href={'./'}>
            <div className='w-1/4 md:flex	hidden' >
                  <Image src={logoC} width={100}  height={50} color='black'/>
            </div>
          </Link>     
            <form className='flex items-center h-3/5 bg-white p-2 rounded-md w-3/4 ' >
              <input type="text" className='pl-2 w-11/12  outline-0 text-[.8rem]' placeholder='Search for products (e.g fish,apple,oil) ' value={Input} onChange={(e) => setInput(e.target.value)} />
              <button onClick={handleSearch}>
                 <TbSearch color='gray' size={15} onClick={() => router.push('/about')} />
              </button>
            </form>
            <div className='md:flex w-1/4 justify-evenly hidden items-center'>
              <MdNotificationsNone color='white' size={30}/>
              <CartDrawer />
              <Display/>
            </div>
          </div>
          <div className='md:flex  items-center justify-between bg-white border-b-2	border-slate-100 h-[40px] px-9 hidden '>
            <div>
              <ul className='flex m-0'>
              <Menu menuButton={<MenuButton><div className='flex items-center'><p className='m-0 ml-2 text-xs'>Categories</p><RiArrowDownSFill /></div></MenuButton>}>
                  <div className='grid grid-cols-2'>
                  {
                    categoryArr.map((cat) => (
                      <MenuItem>
                      <Link href={`/${cat.parent}`} >
                        <div className='flex items-center p-1 rounded-lg'>
                        <div className='h-5 w-5' style={{backgroundImage:`url(${cat.icon})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
                      </div>
                        <div className='p-1 flex flex-col '>
                            <h5 className=' text-gray-600 hover:text-emerald-500 cursor-pointer ml-5'>{cat.parent}</h5>
                        </div>
                      </div>
                    </Link> 
                    </MenuItem>
                    ))
                  }
                  </div>
                </Menu>
                <Link href={'/about'}>
                  <li className='px-4 pt-1 cursor-pointer text-xs align-middle'> 
                    <span className='align-middle'>About Us</span>
                  </li>
                </Link>
                <Link href={'/contact'}>
                <li className='px-4 pt-1 cursor-pointer text-xs align-middle'> 
                  Contact Us
                </li>
                </Link>
                <Menu menuButton={<MenuButton><div className='flex items-center'><p className='m-0 ml-2 text-xs'>Pages</p><RiArrowDownSFill /></div></MenuButton>}>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 pl-4 flex        items-center hover:bg-gray-50 '>
                     <AiOutlineGift />
                    <p className='m-0 hover:text-emerald-600 ml-2'>Offer</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex        items-center hover:bg-gray-50  '>
                     <BiCheckCircle />
                    <p className='m-0 hover:text-emerald-600 ml-2'>CheckOut</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex        items-center hover:bg-gray-50  '>
                     <AiOutlineQuestionCircle />
                    <p className='m-0 hover:text-emerald-600 ml-2'>FAQ</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex items-center hover:bg-gray-50  '>
                     <MdPeopleOutline />
                    <p className='m-0 hover:text-emerald-600 ml-2'>About Us</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex items-center hover:bg-gray-50  '>
                     <MdOutlinePrivacyTip />
                    <p className='m-0 hover:text-emerald-600 ml-2'>Contact Us</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex items-center hover:bg-gray-50 '>
                     <HiPhoneIncoming/>
                    <p className='m-0 hover:text-emerald-600 ml-2'>Privacy Policy</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex items-center hover:bg-gray-50  '>
                     <AiOutlineFileText/>
                    <p className='m-0 hover:text-emerald-600 ml-2'>Terms & Condition</p>
                    </div>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={'/offer'}>
                    <div className='py-2 px-4 flex items-center hover:bg-gray-50  '>
                     <BsExclamationCircle />
                    <p className='m-0 hover:text-emerald-600 ml-2'>404</p>
                    </div>
                  </Link>
                  </MenuItem>
                </Menu>
                <Link href={'/offer'}>
                  <li className='px-4 cursor-pointer'>
                  <span className='py-1 px-2 bg-red-100 text-red-500 text-xs hover:text-emerald-500 rounded'>Offer</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className='flex justify-between m-0 text-xs'>
                <Link href={'/policy'}>
                  <li className='px-4 cursor-pointer'>Privacy Policy</li>
                </Link>
                <Link href={'/terms'}>
                  <li className='cursor-pointer'>Terms & Conditions</li>
                </Link>
                
              
              </ul>
            </div>
          </div>
        </div>
       
      </div>
      <div className='md:hidden flex fixed bottom-0 w-full bg-emerald-500 h-[3.5rem]  items-center justify-between sm:px-12 px-4 z-10' >
        <Button type="link" style={{padding:'0'}} onClick={showDrawer}>
          <HiMenuAlt1 color='white' size={25} />
        </Button>
        <Link href={'/'}>
        <BiHomeAlt color='white' size={25} />
        </Link>
        <CartDrawer />
        <Display />
      </div>
      <Drawer title={<Image src={logoC} width={100}  height={50} color='black'/>
        } closeIcon={<RiCloseCircleFill color='white' size={30} />} headerStyle={{backgroundColor:'rgb(16 ,185, 129)'}} placement="left" onClose={onClose} open={open} width={300}>
      <div>
        <p className='text-lg font-bold mb-2'>All Categories</p>
        <hr></hr>
      </div>
       <Tree
      // showLine
      // switcherIcon={<DownOutlined />}
      // defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
      <div className='mt-14'>
        <p className='text-lg font-bold mb-2'>Pages</p>
        <hr></hr>
      </div>
        <Link href={'/offer'}>
          <div className='py-2 mt-4 pl-4 flex text-black  items-center hover:bg-gray-50 cursor-pointer '>
            <AiOutlineGift />
          <p className='m-0 hover:text-emerald-600 ml-2'>Offer</p>
          </div>
        </Link>
        <Link href={'/checkout'}>
          <div className='py-2 px-4 flex text-black        items-center hover:bg-gray-50 cursor-pointer  '>
            <BiCheckCircle />
          <p className='m-0 hover:text-emerald-600 ml-2'>CheckOut</p>
          </div>
        </Link>
        <Link href={'/offer'}>
          <div className='py-2 px-4 flex text-black        items-center hover:bg-gray-50 cursor-pointer  '>
            <AiOutlineQuestionCircle />
          <p className='m-0 hover:text-emerald-600 ml-2'>FAQ</p>
          </div>
        </Link>
        <Link href={'/aout'}>
          <div className='py-2 px-4 flex text-black items-center hover:bg-gray-50 cursor-pointer  '>
            <MdPeopleOutline />
          <p className='m-0 hover:text-emerald-600 ml-2'>About Us</p>
          </div>
        </Link>
        <Link href={'/contact'}>
          <div className='py-2 px-4 flex text-black items-center hover:bg-gray-50 cursor-pointer  '>
            <MdOutlinePrivacyTip />
          <p className='m-0 hover:text-emerald-600 ml-2'>Contact Us</p>
          </div>
        </Link>
        <Link href={'/policy'}>
          <div className='py-2 px-4 flex text-black items-center hover:bg-gray-50 cursor-pointer '>
            <HiPhoneIncoming/>
          <p className='m-0 hover:text-emerald-600 ml-2'>Privacy Policy</p>
          </div>
        </Link>
        <Link href={'/terms'}>
          <div className='py-2 px-4 flex text-black items-center hover:bg-gray-50 cursor-pointer  '>
            <AiOutlineFileText/>
          <p className='m-0 hover:text-emerald-600 ml-2'>Terms & Condition</p>
          </div>
        </Link>
        <Link href={'/notfound'}>
          <div className='py-2 px-4 flex text-black items-center hover:bg-gray-50 cursor-pointer '>
            <BsExclamationCircle />
          <p className='m-0 hover:text-emerald-600 ml-2'>404</p>
          </div>
        </Link>
      </Drawer>
    </>
    
  )
}

export default Navbar