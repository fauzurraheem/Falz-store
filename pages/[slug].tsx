import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { product } from '../context/products/products';
import PagesTop from '../components/body/pagesTop';
import Products from '../components/body/Products';
import { Button, Dropdown, Menu } from 'antd';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getAllProductsA } from '../utils/actions';






// export const getStaticProps: GetStaticProps<HomePageProps>= async ({param}) => {
//   const products:product[] = await getPatProducts(param)
//   return { props: { 
//     products,
//   } };
// };


// export const getStaticPaths: GetStaticPaths<pathProp> = async () => {

//   const products = await getAllProductsA()
//   const paths = products.map((productU) => ({params: {parent: productU.parent}}) )
//   return {
//     paths: paths,
//     fallback: false
//   }
// }


const CategoryPage = () => {
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
      // console.log(product+ 'you')
    }
    Product()
  }, [])

  const find = Allproduct.filter(obj => {
    return obj.parent === param
  })


  
  
  console.log(Allproduct)
  
  const Descending = [...find].sort((a, b) => b.price - a.price);
  // console.log(numDescending);

  const Ascending = [...find].sort((a, b) => a.price - b.price);
  // console.log(numAscending);
  console.log(find)

  if (loading ){
    return <div className='h-[700px] w-full flex justify-center'>Loading...</div>
  }

  return (
    <div className='p-6 h-2/4 bg-gray-50'>
      <div >
      <PagesTop />
    </div>      
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

export default CategoryPage