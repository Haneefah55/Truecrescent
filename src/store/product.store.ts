import { create } from "zustand"


type Product = {
  _id: string,
  name: string,
  spec: string,
  decription: string,
  price: number,
  categories: string,
  images: [],
  discountedPrice: number,
  review: [],
  stock: boolean
 
}

type Productstate = {
  product: Product | null,
  AllProducts: []
/*   getAllProducts: () => Promise<void>,
  getProduct: () => Promise<void>, */

}

export const useProductStore = create<Productstate>((set) =>({
  product: null,
  AllProducts: [],
  
  
}))