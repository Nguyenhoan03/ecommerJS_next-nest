'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ProductDetail } from '@/types/product';
import { useFetchData } from '@/hook/usefetchData';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data: product, loading, error } = useFetchData<ProductDetail>(`/product/${slug}`);
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  const handleImageClick = (index: number, img: string) => {
    setMainImage(img);
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
                className={`w-20 h-20 border rounded cursor-pointer hover:border-blue-500 ${mainImage === img ? 'border-blue-500' : ''
                  }`}
                onClick={() => handleImageClick(index, img)}
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
              {mainImage && (
                <Image
                  src={`/images/${mainImage}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  
                />
              )}
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
          {/* Payment Options */}
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">Xem cửa hàng có sản phẩm</p>
            <div className="flex justify-center gap-4 mt-4">
              <img src="https://yody.vn/icons/zalopay.png" alt="ZaloPay" className="w-12 h-7" />
              <img src="https://yody.vn/icons/visa-card.png" alt="Visa" className="w-12 h-7" />
              <img src="https://yody.vn/icons/master-card.png" alt="MasterCard" className="w-12 h-7" />
              <img src="https://yody.vn/icons/vnpay-qr.png" alt="VNPay" className="w-12 h-7" />
              <img src="https://yody.vn/icons/momo.png" alt="Momo" className="w-12 h-7" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Đảm bảo thanh toán an toàn và bảo mật
            </p>
          </div>
          {/* Delivery Information */}
          <div className="mb-6">
            <ul className="text-sm text-gray-600 list-disc pl-6">
              <li>
                <strong>Miễn phí vận chuyển:</strong> Đơn hàng từ 498k
              </li>
              <li>
                <strong>Giao hàng:</strong> Từ 3 - 5 ngày trên cả nước
              </li>
              <li>
                <strong>Miễn phí đổi trả:</strong> Tại 267+ cửa hàng trong 15 ngày
              </li>
              <li>Sử dụng mã giảm giá ở bước thanh toán</li>
              <li>Thông tin bảo mật và mã hóa</li>
            </ul>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Lên đồ siêu lịch lãm cùng áo khoác nam YODY. Chiếc áo được thiết kế với màu sắc
              sang trọng, chất liệu đa bền đẹp, chi tiết túi hộp tạo điểm nhấn cá tính riêng.
              Đây là một lựa chọn vừa thời trang, vừa cản gió giữ ấm hiệu quả trong suốt mùa
              đông này.
            </p>
          </div>
        </div>


      </div>
        {/* FAQs */}
        <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md w-full">
  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
    Câu hỏi thường gặp
  </h3>
  <div className="space-y-4">
    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100">
        Tôi có thể trả hàng nếu không vừa ý không?
        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <p className="text-sm text-gray-600 mt-2 px-4">
        YODY hỗ trợ Khách hàng đổi size hoặc đổi màu trong thời gian 15 ngày tính từ thời gian mua hàng/ nhận hàng thành công đầu tiên và sản phẩm còn đủ điều kiện đổi trả.
        <br />
        <a
          href="https://yody.vn/page/chinh-sach-bao-hanh-doi-tra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Chi tiết chính sách đổi trả
        </a>
      </p>
    </details>

    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100">
        Làm thế nào để trở thành thành viên VIP của YODY?
        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <p className="text-sm text-gray-600 mt-2 px-4">
        Khách hàng khi mua sắm sẽ có tiền tích luỹ tương ứng với số tiền Khách hàng thanh toán. Tuỳ vào mức tiền tích luỹ Khách hàng sẽ nhận ưu đãi VIP khác nhau.
        <br />
        <a
          href="https://yody.vn/page/chinh-sach-khach-hang-than-thiet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Xem chi tiết chính sách khách hàng thân thiết
        </a>
      </p>
    </details>

    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100">
        Làm thế nào để tích/ sử dụng điểm mua hàng?
        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <p className="text-sm text-gray-600 mt-2 px-4">
        Điểm tích luỹ sẽ được tích thành công ngay sau khi đơn hàng chuyển trạng thái thành công và có thời gian sử dụng trong vòng 6 tháng tính từ thời gian tích điểm thành công.
      </p>
    </details>

    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100">
        Khi nào tôi có thể nhận được hàng khi mua online?
        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <p className="text-sm text-gray-600 mt-2 px-4">
        Thời gian giao hàng dự kiến từ 3 - 5 ngày tính từ thời gian đặt hàng thành công. Đây là thời gian dự kiến dựa trên thời gian làm việc thực tế và có thể thay đổi theo tình trạng giao hàng thực tế.
      </p>
    </details>

    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100">
        Tôi có thể liên hệ tư vấn như thế nào?
        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
      </summary>
      <p className="text-sm text-gray-600 mt-2 px-4">
        Liên hệ tư vấn và hỗ trợ đặt hàng: <strong>024.999.86.999</strong>
        <br />
        Liên hệ qua <strong>Zalo YODY</strong> hoặc <strong>Facebook YODY</strong>.
        <br />
        Tổng đài miễn phí: <strong>18002086</strong> (8:00 - 22:00, các ngày trong tuần, trừ Tết Âm lịch).
        <br />
        Email: <a href="mailto:chamsockhachhang@yody.vn" className="text-blue-500 hover:underline">chamsockhachhang@yody.vn</a>
      </p>
    </details>
  </div>
</div>
    </div>
  );
}
