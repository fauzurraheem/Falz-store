import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import PagesTop from '../../components/body/pagesTop'
import Products from '../../components/body/Products'
import { product } from '../../context/products/products'
import { Button, Dropdown, Menu } from 'antd';
import { getAllProductsA } from '../../utils/actions'


const Children = () => {
  const [Allproduct, setAllroduct] = useState<product[]>([])
  const [sort, setSort] = useState(0)
  const {query} = useRouter()
  const param = query.slug
  console.log(query)

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
      // console.log(product+ 'you')
    }
    Product()
  }, [])

  const find = Allproduct.filter(obj => {
    return obj.children == param
  })
  console.log(find)
  
  
  console.log(Allproduct)
  const Descending = [...find].sort((a, b) => b.price - a.price);
  // console.log(numDescending);

  const Ascending = [...find].sort((a, b) => a.price - b.price);
  // console.log(numAscending);
  console.log(find)

  return (
    <div className='p-6 h-2/4 bg-gray-50'>
      <PagesTop />
      <div className=' flex justify-between items-center my-5 bg-orange-200 p-2 rounded'>
        <p className='align-middle m-0'>Total <span className='font-semibold'>{find.length}</span>  items Found</p>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <Button>Sort by Price</Button>
          </Dropdown>
        </div>
      </div>
      <div className='grid md:grid-cols-4 lg:grid-cols-5 ph:grid-cols-2 sm:grid-cols-3  gap-4 my-12'>
      {sort === 0 &&
          find.map((product) => (
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
      </div>
    
  )
}

export default Children