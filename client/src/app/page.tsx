'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/common/CardProduct"
import { useState } from "react"
import { useCountdownTimer } from "@/hook/countdown_timer"
import ProductCard_Sale from "@/components/common/CardProduct_Sale"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Card_OutstandingCollection from "@/components/common/Card_OutstandingCollection"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react"
import { ProductType } from "@/types/product"
import axios from "axios"
export default function Home() {
  const { hours, minutes, seconds } = useCountdownTimer();
  const [activeTab, setActiveTab] = useState(1);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const bannerImages = [
    {
      src: "/images/banner1.png",
      alt: "Banner 1",
      href: "/collections/banner1"
    },
    {
      src: "/images/banner2.webp",
      alt: "Banner 2",
      href: "/collections/banner2"
    },
    {
      src: "/images/banner3.webp",
      alt: "Banner 3",
      href: "/collections/banner3"
    },
    {
      src: "/images/banner4.webp",
      alt: "Banner 4",
      href: "/collections/banner4"
    },
    {
      src: "/images/banner5.webp",
      alt: "Banner 5",
      href: "/collections/banner5"
    }
  ]

  const vouchers = [
    {
      discount: "50K",
      minSpend: "199K",
      code: "WS50K"
    },
    {
      discount: "80K",
      minSpend: "399K",
      code: "WS80K"
    },
    {
      discount: "100K",
      minSpend: "499K",
      code: "WS100K"
    },
    {
      discount: "200K",
      minSpend: "999K",
      code: "WS200K"
    },
    {
      discount: "500K",
      minSpend: "999K",
      code: "WS200K"
    }
  ]
  const [data_card, setData_card] = useState<ProductType[]>([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product`);
        setData_card(data.data);
        console.log(data_card, "hoanpp");
      }
      fetchData();
    } catch (error: any) {
      console.log(error.message() + "lỗi hoanpp");
    }
  }, [])
  const [data_card_ao_khoac, setData_card_ao_khoac] = useState<ProductType[]>([]);
const [data_card_ao_thun, setData_card_ao_thun] = useState<ProductType[]>([]);
const [data_card_quan_jeans, setData_card_quan_jeans] = useState<ProductType[]>([]);
const [data_card_ao_polo, setData_card_ao_polo] = useState<ProductType[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const aoKhoac = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product?category=ao-khoac`);
      const aoThun = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product?category=ao-thun`);
      const quanJeans = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product?category=quan-jeans`);
      const aoPolo = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product?category=ao-polo`);

      setData_card_ao_khoac(aoKhoac.data);
      setData_card_ao_thun(aoThun.data);
      setData_card_quan_jeans(quanJeans.data);
      setData_card_ao_polo(aoPolo.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
  const data_card_outlet = [
    {
      image: "PHM7009-REU, ATM7004-DEN (3).webp",
      name: "sàgfdg",
      salePrice: 100000,
      originalPrice: 100000,
      colors: ["red", "blue", "green"],
      discount: 20,

    },
    {
      image: "ao-phao-nu-vip-long-vu-PVN7010-DEN (1).webp",
      name: "sàgfdg",
      salePrice: 100000,
      originalPrice: 100000,
      colors: ["red", "blue", "green"],
      discount: 20,

    },
    {
      image: "PHM7009-REU, ATM7004-DEN (3).webp",
      name: "sàgfdg",
      salePrice: 100000,
      originalPrice: 100000,
      colors: ["red", "blue", "green"],
      discount: 20,

    },
    {
      image: "ao-phao-nu-vip-long-vu-PVN7010-DEN (1).webp",
      name: "sàgfdg",
      salePrice: 100000,
      originalPrice: 100000,
      colors: ["red", "blue", "green"],
      discount: 20,

    }

  ]
  const data_outstanding_collection = [
    {
      image: "ao-phao-nu-vip-long-vu-PVN7010-DEN (1).webp",
      name: "Áo giữ nhiệt XTRA-HEAT™",
      detail: "Công nghệ khóa ấm, hạn chế thoát nhiệt từ động, hạn chế tĩnh điện mùa đông."
    },
    {
      image: "PHM7009-REU, ATM7004-DEN (3).webp",
      name: "YODY Jeans",
      detail: "Công nghệ mới đột phá, tôn dáng với chất liệu mềm mại, thoáng khí, siêu co giãn."
    },
    {
      image: "ao-phao-nu-vip-long-vu-PVN7010-DEN (1).webp",
      name: "Áo Khoác Gió",
      detail: "Thoải mái tận hưởng mọi chuyến đi không lo thời tiết khắc nghiệt."
    },
    {
      image: "PHM7009-REU, ATM7004-DEN (3).webp",
      name: "Đồ Công sở - Smart.Cool",
      detail: "Thiết kế tinh tế, tôn dáng, co giãn linh hoạt, mang lại sự thoải mái cho mọi hoạt động."
    }
  ]
  const handlePopularProducts = (index: number) => {
    setActiveTab(index)
  }
  return (
    <main className="container mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {bannerImages.map((banner, index) => (
            <CarouselItem key={index} className="pl-1 basis-full">
              <Link href={banner.href} className="w-full">
                <Card className="border-0">
                  <CardContent className="flex aspect-[21/9] items-center justify-center p-0 relative">
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      priority={index === 0}
                    />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Voucher Banner */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {vouchers.map((voucher, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg overflow-hidden border border-red-500"
            >
              <div className="bg-[#FF3B2F] text-white p-4 flex flex-col items-center w-32">
                <span className="text-sm font-medium">MÃ GIẢM GIÁ</span>
                <span className="text-2xl font-bold">{voucher.discount}</span>
              </div>
              <div className="px-4 py-2">
                <p className="text-sm text-gray-600">
                  Đơn hàng nguyên giá tối thiểu <span className="font-bold">{voucher.minSpend}</span>
                </p>
                <span className="text-sm text-gray-500">Mã</span>
                <div className="text-red-500 font-bold">{voucher.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tabs */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm ưa chuộng</h2>
        <div className="flex justify-center gap-4">
          <button
            className={`px-6 py-2 rounded-full ${activeTab === 1 ? 'bg-[#FFA500] text-white' : 'text-gray-500'}`}
            onClick={() => handlePopularProducts(1)}
          >
            Hàng mới về
          </button>
          <button
            className={`px-6 py-2 rounded-full ${activeTab === 2 ? 'bg-[#FFA500] text-white' : 'text-gray-500'}`}
            onClick={() => handlePopularProducts(2)}
          >
            Outlet Tháng 11
          </button>
        </div>
      </div>

      <div className="">
        {/* Product Card New product arrived*/}
        <div className="NewProductArrived">
          <ProductCard products={activeTab === 1 ? data_card : data_card_outlet} />
        </div>
        <div className="flex justify-center my-8">
          <Button variant="default" size="lg" className="w-[280px]">Xem thêm</Button>
        </div>
      </div>

      <div className="flex justify-center gap-4 my-8">
        <div className="relative w-[450px] h-[60px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src="/images/voucher1.webp"
            alt="Giảm giá đến 200K"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-[450px] h-[60px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src="/images/voucher2.webp"
            alt="Miễn phí vận chuyển"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-[450px] h-[60px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src="/images/voucher3.webp"
            alt="Đổi trả 15 ngày"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="relative w-full h-[200px]">
            <Image
              src="/images/voucher4.webp"
              alt="Banner Footer"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between bg-[#FCAF17]">
          <div className="ml-4 p-3">
            <h2 className="text-2xl font-bold">Sale bung nóc - Giá huỷ diệt</h2>
            <p>Săn ưu đãi HOT - Độc quyền website
            </p>
          </div>
          <div className="flex items-center my-auto mr-4">
            <div className="flex gap-2">
              <p className="font-bold mx-5 text-[23px]">Kết thúc sau </p>

              <div className="bg-red-600 text-white font-bold p-2 rounded-[2px] w-[60px] text-center">
                {hours}
              </div>
              <div className="bg-red-600 text-white font-bold p-2 rounded-[2px] w-[60px] text-center">
                {minutes}
              </div>
              <div className="bg-red-600 text-white font-bold p-2 rounded-[2px] w-[60px] text-center">
                {seconds}
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-2">
          <ProductCard_Sale products={data_card}/>
        </div>
      </div>
      <div className="OutstandingCollection ">
        <h2 className="text-center text-3xl font-bold my-8">Bộ sưu tập nổi bật</h2>
        <Card_OutstandingCollection products={data_outstanding_collection} />
      </div>
      <Image src="/images/hang-ban-chay-1800x600.webp" alt="Banner Footer" width={1000} height={1000} className="w-full" />

      <div className="flex justify-center items-center gap-2 my-8">
  <h2 className="text-3xl font-bold">Top bán chạy sele</h2>
  <Select defaultValue="nam">
    <SelectTrigger className="w-[100px]">
      <SelectValue placeholder="Nam" />
    </SelectTrigger>
    <SelectContent>
  <SelectItem value="nam">
    <span className="text-2xl">Nam</span>
  </SelectItem>
  <SelectItem value="nu">
    <span className="text-2xl">Nữ</span>
  </SelectItem>
</SelectContent>
  </Select>
</div>
{/* Top bán chạy section */}
<div className="mb-12">
  
  <div className="">
    <ProductCard products={data_card} />
  </div>
  <div className="flex justify-center mt-4">
    <Button variant="outline" className="px-12">Xem thêm</Button>
  </div>
</div>

{/* Áo khoác section */}
<div className="mb-12">
  <div className="grid grid-cols-5 gap-4">
    <div className="col-span-1">
      <Link href="/collections/ao-khoac">
        <Image
          src="/images/bannerao2.webp" 
          alt="Áo khoác" 
          width={300}
          height={120}
          className="w-full object-cover rounded-lg ml-3 mt-8"
        />
      </Link>
    </div>
    <div className="col-span-4">


    <Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="relative w-full"
>
  <CarouselContent className="flex">
    {data_card_ao_khoac.map((product, index) => (
      <CarouselItem
        key={index}
        className="basis-1/3 pl-4"
      >
        <ProductCard 
          products={[product]} 
          containerClassName="h-full w-full" 
        />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>




</div>
  </div>
  <div className="flex justify-center mt-4">
    <Button variant="outline" className="px-12">Xem thêm</Button>
  </div>
</div>

{/* Áo thun giữ nhiệt section */}
<div className="mb-12">
  <div className="grid grid-cols-5 gap-4">
    <div className="col-span-1">
      <Link href="/collections/ao-thun-giu-nhiet">
        <Image 
          src="/images/aokhoac.webp"
          alt="Áo thun giữ nhiệt" 
          width={300}
          height={120}
         className="w-full object-cover rounded-lg ml-3 mt-8"
        />
      </Link>
    </div>
    <div className="col-span-4">
    <Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="relative w-full"
>
  <CarouselContent className="flex">
    {data_card_ao_thun.map((product, index) => (
      <CarouselItem
        key={index}
        className="basis-1/3 pl-4"
      >
        <ProductCard 
          products={[product]} 
          containerClassName="h-full w-full" 
        />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>


</div>
  </div>
  <div className="flex justify-center mt-4">
    <Button variant="outline" className="px-12">Xem thêm</Button>
  </div>
</div>

{/* Quần Jeans section */}
<div className="mb-12">
  <div className="grid grid-cols-5 gap-4">
    <div className="col-span-1">
      <Link href="/collections/quan-jeans">
        <Image 
          src="/images/quanjean.webp" 
          alt="Quần Jeans" 
          width={300}
          height={120}
          className="w-full object-cover rounded-lg ml-3 mt-8"
        />
      </Link>
    </div>
    <div className="col-span-4">
    <Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="relative w-full"
>
  <CarouselContent className="flex">
    {data_card_quan_jeans.map((product, index) => (
      <CarouselItem
        key={index}
        className="basis-1/3 pl-4"
      >
        <ProductCard 
          products={[product]} 
          containerClassName="h-full w-full" 
        />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

</div>
  </div>
  <div className="flex justify-center mt-4">
    <Button variant="outline" className="px-12">Xem thêm</Button>
  </div>
</div>
<div className="mb-12">
  <div className="grid grid-cols-5 gap-4">
    <div className="col-span-1">
      <Link href="/collections/aopolo">
        <Image 
          src="/images/aopolo.webp" 
          alt="Áo Polo" 
          width={300}
          height={120}
           className="w-full object-cover rounded-lg ml-3 mt-8"
        />
      </Link>
    </div>
    <div className="col-span-4">
    <Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="relative w-full"
>
  <CarouselContent className="flex">
    {data_card_ao_polo.map((product, index) => (
      <CarouselItem
        key={index}
        className="basis-1/3 pl-4"
      >
        <ProductCard 
          products={[product]} 
          containerClassName="h-full w-full" 
        />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

</div>
  </div>
  <div className="flex justify-center mt-4">
    <Button variant="outline" className="px-12">Xem thêm</Button>
  </div>
</div>


  <div className="flex gap-4 px-4 my-8">
  <div className="w-1/2">
    <Image 
      src="/images/Frame.webp" 
      alt="Banner Footer" 
      width={1920} 
      height={250} 
      className="w-full h-[250px] object-cover rounded-lg" 
    />
  </div>
  <div className="w-1/2">
    <Image 
      src="/images/Frame2.webp" 
      alt="Banner Footer" 
      width={1920} 
      height={250} 
      className="w-full h-[250px] object-cover rounded-lg" 
    />
  </div>
</div>
    </main>


  )
}
