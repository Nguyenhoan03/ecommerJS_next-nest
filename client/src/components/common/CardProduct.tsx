import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BaseProduct } from "@/types/product"
import Link from "next/link"

const ProductCard = ({ products, containerClassName = "" }: { products: BaseProduct[], containerClassName?: string }) => {
    return (
        <div className={containerClassName}>
            <div className={`${!containerClassName ? "container mx-auto px-4 my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : ""}`}>
                {products.map((product, index) => (
                    <Link href={`/product/${product.name}`} key={index} className="relative w-full group overflow-hidden">
                        <Card key={index} className="relative w-full group overflow-hidden">
                            <CardContent className="p-0">
                                {/* Discount badge */}
                            {product.discount_percent && product.discount_percent > 0 && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm z-10">
                                    -{product.discount_percent}%
                                </div>
                            )}

                            {/* Image container */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={`/images/${product.image}`}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>

                            {/* Product info */}
                            <div className="p-3">
                                <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-red-500 font-bold text-lg">
                                        {Number(product.price) - (Number(product.price) * Number(product.discount_percent) / 100)}đ
                                    </span>
                                    <span className="text-gray-400 line-through text-sm">
                                        {Number(product.price)}đ
                                    </span>
                                </div>
                                {/* Color options */}
                                <div className="flex gap-1 mt-2">
                                    {product?.colors?.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-4 h-4 rounded-full border border-gray-200"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
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