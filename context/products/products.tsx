import {createContext, ReactNode, useContext, useState} from 'react'
import React from 'react'

export interface PProvider {
  children?:ReactNode
}

export type product = {
  parent:string
  children:string
  description:string
  discount:number
  image:string
  originalPrice:number
  price:number
  slug:string
  title:string
  type:string
  unit:string
  _id:string | null
  quantity:number
  tag:[
    string[]
  ]
  __v:number
}


interface products  {
  getCatProducts: () => Promise<product[]>
  // getDisProducts: () => Promise<product[]>
}



export const ProductContext = createContext<products>({} as products)

export const ProductProvider:React.FC<PProvider> = ({children}) => {

  const getCatProducts = async () => {
    const res = await fetch(`https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/product.json`)
    const dataAll = await res.json()

    return dataAll
  }

  // const getDisProducts = async () => {
  //   const res = await fetch("https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/")
  //   const dataDis = await res.json()

  //   return dataDis
  // }




  return (
    <ProductContext.Provider value={{getCatProducts}}>
      {children}
    </ProductContext.Provider>
  )
}