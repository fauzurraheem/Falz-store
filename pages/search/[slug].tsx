import { Button, Dropdown, Menu } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import PagesTop from '../../components/body/pagesTop'
import Products from '../../components/body/Products'
import { product } from '../../context/products/products'
import { getAllProductsA,} from '../../utils/actions'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import noresult from '../../assets/webp/no-result.svg'

import Image from 'next/image'

const Search = () => {
  const [Allproduct, setAllroduct] = useState<product[]>([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState(0)
  const {query} = useRouter()
  const param = query.slug as string

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <p onClick={(e) => setSort(2)}>Lowest to Higest</p>
          ),
        },
        {
          key: '2',
          label: (
            <p onClick={(e) => setSort(1)}>Highest to Lowest</p>
          ),
        },
      ]}
    />
  );
  

  useEffect( () => {

    const Product = async() => {
      const product = await getAllProductsA()

      setAllroduct(product)
      setLoading(false)
    }
    Product()
    
  }, [])

  const Regex = Allproduct.filter(item => {
    const re = new RegExp(param, "gi")
    return item.title.match(re)
  })


  const find = Allproduct.filter(obj => {
     
    return obj.title.match(`/${param}/gi`)
  })
  
  
  const Descending = [...Regex].sort((a, b) => b.price - a.price);

  const Ascending = [...Regex].sort((a, b) => a.price - b.price);

  if (loading ){
    return <div className='h-[700px] w-full flex justify-center'>Loading...</div>
  }

  return (
  <div className='p-6 h-2/4 bg-gray-50'>
    <div >
      <PagesTop />
    </div>
      <div className=' flex justify-between items-center my-5 bg-orange-200 p-2 rounded'>
        <p className='align-middle m-0'>Total <span className='font-semibold'>{Regex.length}</span>  items Found</p>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <Button>Sort by Price</Button>
          </Dropdown>
        </div>
      </div>
      {
        Regex.length === 0 ?  <div className='flex flex-col justify-center items-center'>
        <Image src={noresult} width={600} height={400}/>
        <p>Sory, we could not find this product</p>
      </div>:
        <div className='grid md:grid-cols-4 lg:grid-cols-5 ph:grid-cols-2 sm:grid-cols-3  gap-4 my-12'>
      {sort === 0 &&
          Regex.map((product) => (
          <Products product={product} key={product._id}/>
      ))
      }
      {
        sort === 1 && Descending.map((product) => (
          <Products product={product} key={product._id}/>
        ))
      }
      {
        sort === 2 && Ascending.map((product) => (
          <Products product={product} key={product._id}/>
        ))
      }
      </div>
      }
  </div>
  )
}

export default Search