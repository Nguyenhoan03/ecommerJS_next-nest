import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1B1F2D] text-white pt-12 pb-6 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch vụ khách hàng</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#">Chính sách khách hàng thân thiết</Link></li>
              <li><Link href="#">Chính sách đổi trả</Link></li>
              <li><Link href="#">Chính sách bảo mật</Link></li>
              <li><Link href="#">Chính sách thanh toán, giao nhận</Link></li>
              <li><Link href="#">Chính sách đơn đồng phục</Link></li>
              <li><Link href="#">Hướng dẫn chọn size</Link></li>
              <li><Link href="#">Đăng ký đối tác</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Về YODY</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#">Giới thiệu</Link></li>
              <li><Link href="#">Tuyển dụng</Link></li>
              <li><Link href="#">Tin tức</Link></li>
              <li><Link href="#">Hệ thống cửa hàng</Link></li>
              <li><Link href="#">Tin khuyến mãi</Link></li>
            </ul>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">Địa chỉ liên hệ</h3>
              <p className="text-gray-300">Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">YODY lắng nghe bạn</h3>
            <p className="text-gray-300 mb-6">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <div>Liên hệ đặt hàng</div>
                  <div>024 999 86 999</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                <div>
                  <div>Góp ý khiếu nại</div>
                  <div>1800 2086</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <div>Email</div>
                  <div>chamsockhachhang@yody.vn</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-white">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="text-white">
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className="text-white">
                <Image src="/images/zalo.svg" alt="Zalo" width={24} height={24} />
              </Link>
              <Link href="#" className="text-white">
                <Image src="/images/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300">
              <p className="font-bold">© CÔNG TY CỔ PHẦN THỜI TRANG YODY</p>
              <p className="text-sm">Mã số doanh nghiệp: 0801206940. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hải Dương cấp lần đầu ngày 04/03/2017</p>
            </div>
            <div className="flex gap-4">
              <Image src="/images/bo-cong-thuong.png" alt="Bộ Công Thương" width={100} height={40} />
              <Image src="/images/dmca.png" alt="DMCA Protected" width={100} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}