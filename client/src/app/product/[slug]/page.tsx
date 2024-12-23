'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ProductDetail } from '@/types/product';
import { useFetchData } from '@/hook/usefetchData';
export default function ProductDetailPage() {
  const { slug } = useParams();
  const [mainImage, setMainImage] = useState(0);
  // Fetch product data
  const { data: product, loading, error } = useFetchData<ProductDetail>(`/product/${slug}`);
  console.log(product,"data product");
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;
  const handleImageClick = (index: number) => {
    if (index !== mainImage) setMainImage(index); 
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/">Trang chủ</Link> &gt;
        <Link href="/nam">Nam</Link> &gt;
        <span className="text-gray-900">{product.name}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {product.images?.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 border rounded cursor-pointer hover:border-blue-500 ${
                  mainImage === index ? 'border-blue-500' : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={`/images/${img}`}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="relative aspect-square">
              <Image
                src={`/images/${product.image}`}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
          <div className="text-sm mb-4">
            <span className="mr-2">★★★★★ {product.rating}</span>
            <span className="text-gray-500">({product.reviewCount})</span>
            <span className="mx-2">|</span>
            <span>Đã bán {product.soldCount}</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-red-500 text-2xl font-medium">
              {product.price.toLocaleString()}đ
            </span>
            {product.discount > 0 && (
              <span className="text-red-500">-{product.discount}%</span>
            )}
          </div>
          <div className="mb-6">
            <p className="mb-2">Màu sắc: {product.color}</p>
            <p className="mb-2">Kích thước: {product.size}</p>
            <p className="mb-2">Số lượng còn: {product.quantity}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Thêm vào giỏ hàng
          </button>
          <button className="w-full mt-2 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">
            Mua ngay
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-medium mb-4">Mô tả sản phẩm</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
