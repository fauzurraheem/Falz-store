import { product } from "../context/products/products"

export const getDisProducts = async () => {
    const res = await fetch('https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/products.json?orderBy="discount"&startAt=7&endAt="17"&limitToFirst=12&print="pretty"')
    const data = await res.json()
    const arr:product[] = Object.values(data);

    return arr
}

export const getAllProducts = async () => {
    const res = await fetch('https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/products.json?orderBy="price"&startAt=10&endAt=15&limitToFirst=20&print="pretty"')
    const data = await res.json()
    const arr:product[] = Object.values(data);


    return arr
  }
  export const getSlugProducts = async (params) => {
    const data = await getAllProductsA()
    const fetched = data.find((slug) => (
      params === slug.slug
    ))


    return fetched
  }

  export const getAllProductsA = async () => {
    const res = await fetch(`https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/products.json?`)
    const data = await res.json()
    const arr:product[] = Object.values(data);


    return arr
  }

  export const getChillProducts = async (param:string) => {
    const res = await fetch(`https://kachabazar-store-5d0c4-default-rtdb.firebaseio.com/products.json?orderBy="children"&equalTo="${param}"&limitToFirst=20&print="pretty"`)
    const data = await res.json()
    const arr:product[] = Object.values(data);


    return arr
  }



 