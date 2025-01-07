'use client'

import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import ProductCard from '@/components/common/CardProduct';
import { useFetchData } from '@/hook/usefetchData';
import { Category } from '@/types/product';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
    const { slug } = useParams();
    const { data } = useFetchData<Category>(`/category/${slug}`, { method: 'GET' });
    return (
        <div className="container mx-auto px-4">
            <div className="flex gap-8">
                <div className="w-64 flex-shrink-0">
                    <div className="mb-4">
                        <p>{data?.products?.length || 0} sản phẩm</p>
                        <h2 className="text-xl font-medium">Bộ lọc</h2>
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Giới tính</h3>
                            <FaAngleDown />
                        </div>
                        <div className="space-y-2">
                            {['Nam', 'Nữ', 'Bé trai', 'Bé gái'].map((gender) => (
                                <label key={gender} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>{gender}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Kích thước</h3>
                            <FaAngleDown />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                                <button key={size} className="border rounded-md py-1 px-2 hover:border-blue-500">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Theo giá</h3>
                            <FaAngleDown />
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Dưới 350.000đ</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Từ 350.000đ - 750.000đ</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <ProductCard products={data?.products || []} />
                </div>
            </div>
        </div>
    );
}