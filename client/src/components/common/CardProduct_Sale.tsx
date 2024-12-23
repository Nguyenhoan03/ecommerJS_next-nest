import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ProductType} from "@/types/product"
import Link from "next/link"

const ProductCard_Sale = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="container mx-auto px-4 my-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link href={`/product/${product.name}`} key={product.id} className="relative group cursor-pointer">
          <Card key={product.id} className="relative group cursor-pointer">
            <CardContent className="p-0">
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm z-10">
                -{product.discount_percent}%
              </div>
              
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/${product.image}`}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-3">
              <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold text-lg">
                    {Number(product.price) - (Number(product.price) * Number(product.discount_percent) / 100)}đ
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {Number(product.price)}đ
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductCard_Sale