export interface Product {
  id: number        
  name: string
  image: string
  price: number
  colors?: string[]
  discount_percent: number
  sold: number
  total_reviews: number
  created_at: string
  updated_at: string | null
  url_affiliate: string
}

export interface Category {
  id: number
  name: string
  slug: string
  parent_id: number
  level: number
  created_at: string
  updated_at: string | null
  products: Product[]
  subCategories?: subCategories[]
}
interface subCategories{
  id: number
  name: string
  slug: string
  parent_id: number
  level: number
  created_at: string
  updated_at: string | null
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