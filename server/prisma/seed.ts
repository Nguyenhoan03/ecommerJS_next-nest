import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const product1 = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Áo Phao Nam 3S Siêu Nhẹ Tay Raglan 1',
      price: 100.00,
      discount_percent: 10,
      sold: 50,
      image: 'hmv1.webp',
      url_affiliate: "https://s.shopee.vn/60BCy8FDNq",
      total_reviews: 25,
      categories: {
        connect: [
          { id: 1 },
          { id: 4 },
          { id: 10 }
        ]
      },
      details: {  
        create: [
            {
              color: 'White',
              size: '42',
              quantity: 100,
              images: ['hmv1.webp', 'hmv2.webp'],
              description: 'Classic white Nike Air Force 1'
            },
            {
              color: 'Black',
              size: '43',
              quantity: 80,
              images: ['hmv3.webp', 'hmv4.webp'],
              description: 'Classic black Nike Air Force 1'
            }
        ]
      }
    },
  });
  
  const product2 = await prisma.product.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Áo Phao Nam 3S Siêu Nhẹ Tay Raglan 2',
      price: 90.00,
      discount_percent: 5,
      sold: 30,
      image: 'hmv2.webp',
      total_reviews: 15,
      url_affiliate: 'https://s.shopee.vn/2ful0AAfLu',
      categories: {
        connect: [
          { id: 2 },
          { id: 5 },
          { id: 10 }
        ]
      },
      details: {  
        create: [
            {
              color: 'White',
              size: '41',
              quantity: 75,
              images: ['hmv5.webp', 'hmv6.webp'],
              description: 'Classic white Adidas Superstar'
            },
            {
              color: 'Black',
              size: '42',
              quantity: 60,
              images: ['hmv7.webp', 'hmv8.webp'],
              description: 'Classic black Adidas Superstar'
            }
        ]
      }
    },
  });
  
  const product3 = await prisma.product.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Áo Phao Nam 3S Siêu Nhẹ Tay Raglan 3',
      price: 150.00,
      discount_percent: 15,
      sold: 45,
      image: 'hmv3.webp',
      url_affiliate: 'https://s.shopee.vn/VqJ6O1FcT',
      total_reviews: 30,
      categories: {
        connect: [
          { id: 3 },
          { id: 5 },
          { id: 7 }
        ]
      },
      details: {
        create: [
            {
              color: 'Đen',
              size: 'L',
              quantity: 65,
              images: ['hmv9.webp', 'hmv10.webp'],
              description: 'Áo phao nam cao cấp màu đen size L'
            },
            {
              color: 'Xám',
              size: 'XL',
              quantity: 55,
              images: ['hmv11.webp', 'hmv12.webp'],
              description: 'Áo phao nam cao cấp màu xám size XL'
            }
        ]
      }
    },
  });
  
  const product4 = await prisma.product.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Áo Phao Nam 3S Siêu Nhẹ Tay Raglan 4',
      price: 180.00,
      discount_percent: 20,
      sold: 60,
      image: 'hmv4.webp',
      url_affiliate: 'https://s.shopee.vn/703mqMJxgb',
      total_reviews: 40,
      categories: {
        connect: [
          { id: 2 },
          { id: 5 },
          { id: 8 }
        ]
      },
      details: {
        create: [
            {
              color: 'Xanh rêu',
              size: 'M',
              quantity: 45,
              images: ['hmv13.webp', 'hmv14.webp'],
              description: 'Áo phao nam thể thao màu xanh rêu size M'
            }
        ]
      }
    },
  });
  
  const product5 = await prisma.product.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: 'Áo Denim Nam Light Weight',
      price: 110.00,
      discount_percent: 8,
      sold: 25,
      image: 'hmv5.webp',
      url_affiliate: 'https://s.shopee.vn/8zorE3KwwE',
      total_reviews: 20,
      categories: {
        connect: [
          { id: 1 },
          { id: 5 },
          { id: 11 }
        ]
      },
      details: {
        create: [
            {
              color: 'Xanh jean',
              size: 'L',
              quantity: 70,
              images: ['hmv15.webp', 'hmv16.webp'],
              description: 'Áo denim nam nhẹ màu xanh jean size L'
            }
        ]
      }
    },
  });
  
  const product6 = await prisma.product.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: 'Áo Khoác Thể Thao Nữ Siêu Nhẹ Siêu Co Giãn',
      price: 85.00,
      discount_percent: 12,
      sold: 40,
      image: 'hmv6.webp',
      url_affiliate: 'https://s.shopee.vn/7pctpvTJmE',
      total_reviews: 35,
      categories: {
        connect: [
          { id: 2 },
          { id: 7 },
          { id: 9 }
        ]
      },
      details: {
        create: [
            {
              color: 'Hồng',
              size: 'S',
              quantity: 50,
              images: ['hmv17.webp', 'hmv18.webp'],
              description: 'Áo khoác thể thao nữ siêu nhẹ màu hồng size S'
            }
        ]
      }
    },
  });
  
  const product7 = await prisma.product.upsert({
    where: { id: 7 },
    update: {},
    create: {
      name: 'Áo Giữ Nhiệt Nữ XTRA - HEAT™ Cổ 3cm',
      price: 65.00,
      discount_percent: 0,
      sold: 80,
      image: 'hmv7.webp',
      url_affiliate: 'https://s.shopee.vn/4AjbTC3H8F',
      total_reviews: 55,
      categories: {
        connect: [
          { id: 2 },
          { id: 7 },
          { id: 14 }
        ]
      },
      details: {
        create: [
            {
              color: 'Đen',
              size: 'M',
              quantity: 90,
              images: ['hmv19.webp', 'hmv20.webp'],
              description: 'Áo giữ nhiệt nữ công nghệ XTRA-HEAT màu đen size M'
            }
        ]
      }
    },
  });
  
  const product8 = await prisma.product.upsert({
    where: { id: 8 },
    update: {},
    create: {
      name: 'Áo Khoác Thể Thao Nữ Siêu Nhẹ Siêu Co Giãn',
      price: 80.00,
      discount_percent: 7,
      sold: 65,
      image: 'hmv8.webp',
      url_affiliate: 'https://s.shopee.vn/8pVR1mP6hf',
      total_reviews: 45,
      categories: {
        connect: [
          { id: 2 },
          { id: 7 },
          { id: 12 }
        ]
      },
      details: {
        create: [
            {
              color: 'Xanh dương',
              size: 'M',
              quantity: 85,
              images: ['hmv21.webp', 'hmv22.webp'],
              description: 'Áo khoác thể thao nữ siêu nhẹ màu xanh dương size M'
            }
        ]
      }
    },
  });
  
  const product9 = await prisma.product.upsert({
    where: { id: 9 },
    update: {},
    create: {
      name: 'Áo Thun Nữ Basic Cotton',
      price: 75.00,
      discount_percent: 15,
      sold: 35,
      image: 'hmv9.webp',
      url_affiliate: 'https://s.shopee.vn/3Ar4HNFXwS',
      total_reviews: 28,
      categories: {
        connect: [
          { id: 2 },
          { id: 14 },
          { id: 15 }
        ]
      },
      details: {
        create: [
            {
              color: 'Trắng',
              size: 'S', 
              quantity: 70,
              images: ['hmv23.webp', 'hmv24.webp'],
              description: 'Áo thun nữ cotton cơ bản màu trắng size S'
            }
        ]
      }
    },
  });

console.log({ product1, product2, product3, product4, product5, product6, product7, product8, product9 });

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });