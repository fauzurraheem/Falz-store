import { product } from "../products/products";
import { Init } from "./cartContext";


export enum CartActions {
  Add_To_Cart,
  Add_Amount,
  Reduce_Amount,
  Remove_From_Cart
}

export interface Add_To_Cart {
  type: CartActions.Add_To_Cart
  payload:product;
}

export interface Add_Amount {
  type: CartActions.Add_Amount
  payload: product
}
export interface Reduce_Amount {
  type: CartActions.Reduce_Amount
  payload: product
}

export interface Remove_From_Cart {
  type:CartActions.Remove_From_Cart
  payload:product
}

export type Actions = Add_To_Cart | Remove_From_Cart | Add_Amount | Reduce_Amount ;

const cartReducer = (state:Init, action:Actions) => {
  switch(action.type){
    case CartActions.Add_To_Cart:
        return {
          ...state,
          cart: [...state.cart,{...action.payload, __v:1}]
        }
    case CartActions.Remove_From_Cart:
        return {
            ...state,
            cart: state.cart.filter((r) => r._id !== action.payload._id )
        }
    case CartActions.Add_Amount:
          let found = state.cart.find((p) => p._id === action.payload._id)
          
          if(found){
            return {
              ...state,
              cart: state.cart.map(p => 
                p._id === action.payload._id  ? {...p, __v:(p.__v) + 1 } : p) 
  
          }
          }
    case CartActions.Reduce_Amount:
      let founded = state.cart.find((p) => p._id === action.payload._id)
          
      if(founded && founded.__v > 1){
        return {
          ...state,
          cart: state.cart.map(p => 
            p._id === action.payload._id  ? {...p, __v:(p.__v) - 1 } : p) 

      }
      }else if (founded && founded.__v <= 1){

        return {
          ...state,
          cart: state.cart.filter((r) => r._id !== action.payload._id )
        }
      }
    // case ActionType.Clear_User:
    //     return{
    //         ...state,
    //         users: action.payload,
    //     }
    default:
        return state
  }

}

export default cartReducer