import React, { FC } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link';

type ProductCard_OutstandingCollection = {
    image: string;  
    name: string;
    detail: string;
}

type Props = {
    products: ProductCard_OutstandingCollection[];
}

const Card_OutstandingCollection: FC<Props> = ({ products }) => {
    return (
        <div className="container mx-auto px-4 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                
                        <Link href={`/product/${product.name}`} key={index} className="relative group cursor-pointer">
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                            <Image
                                src={`/images/${product.image}`}
                                alt={product.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {product.detail}
                        </p>
                        <Button 
                            variant="outline" 
                            className="rounded-full px-6 py-2 hover:bg-gray-100"
                        >
                            Tìm hiểu thêm
                        </Button>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Card_OutstandingCollection;