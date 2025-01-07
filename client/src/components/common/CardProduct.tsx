'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Product } from "@/types/product"
import Link from "next/link"

export interface ProductCardProps {
    products: Product[]; 
    containerClassName?: string;
}
const ProductCard : React.FC<ProductCardProps> = ({ products, containerClassName = "" }) => {
    if (!products || products.length === 0) return null;
    return (
        <div className={containerClassName}>
            <div className={`${!containerClassName ? "container mx-auto px-4 my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : ""}`}>
                {products.map((product) => (
                    <Link href={`/product/${product.name}`} key={product.id} className="relative w-full group overflow-hidden">
                        <Card className="relative w-full group overflow-hidden">
                            <CardContent className="p-0">
                                {product.discount_percent > 0 && (
                                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm z-10">
                                        -{product.discount_percent}%
                                    </div>
                                )}

                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={`/images/${product.image}`}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                        priority
                                    />
                                </div>

                                <div className="p-3">
                                    <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-red-500 font-bold text-lg">
                                            {new Intl.NumberFormat('vi-VN').format(product.price - (product.price * product.discount_percent / 100))}đ
                                        </span>
                                        <span className="text-gray-400 line-through text-sm">
                                            {new Intl.NumberFormat('vi-VN').format(product.price)}đ
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

export default ProductCard