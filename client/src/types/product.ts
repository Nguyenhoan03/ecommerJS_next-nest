export interface BaseProduct {
  id?: number        
  name: string
  image: string
  price?: number
  discount_percent?: number   
  colors: string[]
  isExclusive?: boolean 
}




export interface ProductType extends BaseProduct {
  details: ProductDetail[]
}

export interface ProductDetail {
  id: number
  productId: number
  name: string
  price: number
  discount: number
  image: string
  rating: number 
  reviewCount: number
  soldCount: number
  color: string
  size: string
  quantity: number
  images: string[]
  description: string
  created_at: string
  updated_at: string
}
