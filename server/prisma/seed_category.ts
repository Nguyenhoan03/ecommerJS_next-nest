import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      { id: 1, name: 'Nam', slug: 'nam', parent_id: null, level: 1 },
      { id: 2, name: 'Nữ', slug: 'nu', parent_id: null, level: 1 },
      { id: 3, name: 'Trẻ em', slug: 'tre-em', parent_id: null, level: 1 },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: 4, name: 'Áo nam', slug: 'ao-nam', parent_id: 1, level: 2 },
      { id: 5, name: 'Quần nam', slug: 'quan-nam', parent_id: 1, level: 2 },
      { id: 6, name: 'Đồ bộ nam', slug: 'do-bo-nam', parent_id: 1, level: 2 },
      { id: 7, name: 'Đồ thể thao nam', slug: 'do-the-thao-nam', parent_id: 1, level: 2 },
      { id: 8, name: 'Phụ kiện nam', slug: 'phu-kien-nam', parent_id: 1, level: 2 },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: 9, name: 'Áo khoác nam', slug: 'ao-khoac-nam', parent_id: 4, level: 3 },
      { id: 10, name: 'Áo phao nam', slug: 'ao-phao-nam', parent_id: 4, level: 3 },
      { id: 11, name: 'Áo gió nam', slug: 'ao-gio-nam', parent_id: 4, level: 3 },
      { id: 12, name: 'Áo hoodie nam', slug: 'ao-hoodie-nam', parent_id: 4, level: 3 },
      { id: 13, name: 'Áo len nam', slug: 'ao-len-nam', parent_id: 4, level: 3 },
      { id: 14, name: 'Áo thun nam', slug: 'ao-thun-nam', parent_id: 4, level: 3 },
      { id: 15, name: 'Áo sơ mi nam', slug: 'ao-so-mi-nam', parent_id: 4, level: 3 },
      { id: 16, name: 'Áo polo nam', slug: 'ao-polo-nam', parent_id: 4, level: 3 },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: 17, name: 'Quần dài nam', slug: 'quan-dai-nam', parent_id: 5, level: 3 },
      { id: 18, name: 'Quần kaki nam', slug: 'quan-kaki-nam', parent_id: 5, level: 3 },
      { id: 19, name: 'Quần short nam', slug: 'quan-short-nam', parent_id: 5, level: 3 },
      { id: 20, name: 'Quần jeans nam', slug: 'quan-jeans-nam', parent_id: 5, level: 3 },
      { id: 21, name: 'Quần âu nam', slug: 'quan-au-nam', parent_id: 5, level: 3 },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: 22, name: 'Đồ bộ dài tay nam', slug: 'do-bo-dai-tay-nam', parent_id: 6, level: 3 },
      { id: 23, name: 'Đồ bộ ngắn tay nam', slug: 'do-bo-ngan-tay-nam', parent_id: 6, level: 3 },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: 24, name: 'Tất nam', slug: 'tat-nam', parent_id: 8, level: 3 },
      { id: 25, name: 'Túi xách nam', slug: 'tui-xach-nam', parent_id: 8, level: 3 },
      { id: 26, name: 'Mũ nam', slug: 'mu-nam', parent_id: 8, level: 3 },
      { id: 27, name: 'Thắt lưng nam', slug: 'that-lung-nam', parent_id: 8, level: 3 },
      { id: 28, name: 'Giày nam', slug: 'giay-nam', parent_id: 8, level: 3 },
    ],
  });

  console.log('Seed data completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });