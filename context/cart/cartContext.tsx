import {createContext, ReactNode, useContext, useReducer, useState} from 'react'
import React from 'react'
import { product } from '../products/products'
import cartReducer, { Actions } from './cartReducer'

type Props = {
  children : React.ReactNode
}

export type productA = {
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
  amt:number
}


export interface Init {
  cart:product[]
}

const InitialState:Init = {
  cart:[]
}


export const CartContext = createContext<{state:Init; dispatch: React.Dispatch<Actions>}>({state:InitialState, dispatch:() => null})



export const CartProvider = ({children}:Props) => {

  
  const [state, dispatch] = useReducer(cartReducer, InitialState)



  return (
    <CartContext.Provider  value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}