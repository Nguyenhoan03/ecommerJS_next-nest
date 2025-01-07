import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();

  // Danh mục cấp 1
  await prisma.category.createMany({
    data: [
      { id: 1, name: 'Nam', slug: 'nam', parent_id: null, level: 1 },
      { id: 2, name: 'Nữ', slug: 'nu', parent_id: null, level: 1 },
      { id: 3, name: 'Trẻ em', slug: 'tre-em', parent_id: null, level: 1 },
    ],
  });

  // === DANH MỤC NAM ===
  // Danh mục Nam cấp 2
  await prisma.category.createMany({
    data: [
      { id: 4, name: 'Áo nam', slug: 'ao-nam', parent_id: 1, level: 2 },
      { id: 5, name: 'Quần nam', slug: 'quan-nam', parent_id: 1, level: 2 },
      { id: 6, name: 'Đồ bộ nam', slug: 'do-bo-nam', parent_id: 1, level: 2 },
      { id: 7, name: 'Đồ mặc trong nam', slug: 'do-mac-trong-nam', parent_id: 1, level: 2 },
      { id: 8, name: 'Đồ thể thao nam', slug: 'do-the-thao-nam', parent_id: 1, level: 2 },
      { id: 9, name: 'Phụ kiện nam', slug: 'phu-kien-nam', parent_id: 1, level: 2 },
    ],
  });

  // Danh mục con của Áo nam
  await prisma.category.createMany({
    data: [
      { id: 10, name: 'Áo khoác nam', slug: 'ao-khoac-nam', parent_id: 4, level: 3 },
      { id: 11, name: 'Áo phao nam', slug: 'ao-phao-nam', parent_id: 4, level: 3 },
      { id: 12, name: 'Áo gió nam', slug: 'ao-gio-nam', parent_id: 4, level: 3 },
      { id: 13, name: 'Áo hoodie nam', slug: 'ao-hoodie-nam', parent_id: 4, level: 3 },
      { id: 14, name: 'Áo len nam', slug: 'ao-len-nam', parent_id: 4, level: 3 },
      { id: 15, name: 'Áo thun nam', slug: 'ao-thun-nam', parent_id: 4, level: 3 },
      { id: 16, name: 'Áo sơ mi nam', slug: 'ao-so-mi-nam', parent_id: 4, level: 3 },
      { id: 17, name: 'Áo polo nam', slug: 'ao-polo-nam', parent_id: 4, level: 3 },
    ],
  });

  // Danh mục con của Quần nam
  await prisma.category.createMany({
    data: [
      { id: 18, name: 'Quần dài nam', slug: 'quan-dai-nam', parent_id: 5, level: 3 },
      { id: 19, name: 'Quần kaki nam', slug: 'quan-kaki-nam', parent_id: 5, level: 3 },
      { id: 20, name: 'Quần short nam', slug: 'quan-short-nam', parent_id: 5, level: 3 },
      { id: 21, name: 'Quần jeans nam', slug: 'quan-jeans-nam', parent_id: 5, level: 3 },
      { id: 22, name: 'Quần âu nam', slug: 'quan-au-nam', parent_id: 5, level: 3 },
    ],
  });

  // Danh mục con của Đồ bộ nam
  await prisma.category.createMany({
    data: [
      { id: 23, name: 'Đồ bộ dài tay nam', slug: 'do-bo-dai-tay-nam', parent_id: 6, level: 3 },
      { id: 24, name: 'Đồ bộ ngắn tay nam', slug: 'do-bo-ngan-tay-nam', parent_id: 6, level: 3 },
    ],
  });

  // Danh mục con của Đồ mặc trong nam
  await prisma.category.createMany({
    data: [
      { id: 25, name: 'Quần lót nam', slug: 'quan-lot-nam', parent_id: 7, level: 3 },
      { id: 26, name: 'Áo ba lỗ nam', slug: 'ao-ba-lo-nam', parent_id: 7, level: 3 },
      { id: 27, name: 'Áo giữ nhiệt nam', slug: 'ao-giu-nhiet-nam', parent_id: 7, level: 3 },
    ],
  });

  // Danh mục con của Đồ thể thao nam
  await prisma.category.createMany({
    data: [
      { id: 28, name: 'Quần thể thao nam', slug: 'quan-the-thao-nam', parent_id: 8, level: 3 },
      { id: 29, name: 'Áo polo thể thao nam', slug: 'ao-polo-the-thao-nam', parent_id: 8, level: 3 },
      { id: 30, name: 'Áo thun thể thao nam', slug: 'ao-thun-the-thao-nam', parent_id: 8, level: 3 },
      { id: 31, name: 'Bộ thể thao nam', slug: 'bo-the-thao-nam', parent_id: 8, level: 3 },
    ],
  });

  // Danh mục con của Phụ kiện nam
  await prisma.category.createMany({
    data: [
      { id: 32, name: 'Tất nam', slug: 'tat-nam', parent_id: 9, level: 3 },
      { id: 33, name: 'Túi xách nam', slug: 'tui-xach-nam', parent_id: 9, level: 3 },
      { id: 34, name: 'Mũ nam', slug: 'mu-nam', parent_id: 9, level: 3 },
      { id: 35, name: 'Thắt lưng nam', slug: 'that-lung-nam', parent_id: 9, level: 3 },
      { id: 36, name: 'Giày nam', slug: 'giay-nam', parent_id: 9, level: 3 },
    ],
  });

  // === DANH MỤC NỮ ===
  // Danh mục Nữ cấp 2
  await prisma.category.createMany({
    data: [
      { id: 37, name: 'Áo nữ', slug: 'ao-nu', parent_id: 2, level: 2 },
      { id: 38, name: 'Quần nữ', slug: 'quan-nu', parent_id: 2, level: 2 },
      { id: 39, name: 'Đồ bộ nữ', slug: 'do-bo-nu', parent_id: 2, level: 2 },
      { id: 40, name: 'Đồ mặc trong nữ', slug: 'do-mac-trong-nu', parent_id: 2, level: 2 },
      { id: 41, name: 'Đồ thể thao nữ', slug: 'do-the-thao-nu', parent_id: 2, level: 2 },
      { id: 42, name: 'Đầm và chân váy', slug: 'dam-va-chan-vay', parent_id: 2, level: 2 },
      { id: 43, name: 'Phụ kiện nữ', slug: 'phu-kien-nu', parent_id: 2, level: 2 },
    ],
  });

  // Danh mục con của Áo nữ
  await prisma.category.createMany({
    data: [
      { id: 44, name: 'Áo vest nữ', slug: 'ao-vest-nu', parent_id: 37, level: 3 },
      { id: 45, name: 'Áo khoác nữ', slug: 'ao-khoac-nu', parent_id: 37, level: 3 },
      { id: 46, name: 'Áo phao nữ', slug: 'ao-phao-nu', parent_id: 37, level: 3 },
      { id: 47, name: 'Áo gió nữ', slug: 'ao-gio-nu', parent_id: 37, level: 3 },
      { id: 48, name: 'Áo chống nắng nữ', slug: 'ao-chong-nang-nu', parent_id: 37, level: 3 },
      { id: 49, name: 'Áo hoodie nữ', slug: 'ao-hoodie-nu', parent_id: 37, level: 3 },
      { id: 50, name: 'Áo len nữ', slug: 'ao-len-nu', parent_id: 37, level: 3 },
      { id: 51, name: 'Áo polo nữ', slug: 'ao-polo-nu', parent_id: 37, level: 3 },
      { id: 52, name: 'Áo sơ mi nữ', slug: 'ao-so-mi-nu', parent_id: 37, level: 3 },
      { id: 53, name: 'Áo thun nữ', slug: 'ao-thun-nu', parent_id: 37, level: 3 },
    ],
  });

  // Danh mục con của Quần nữ
  await prisma.category.createMany({
    data: [
      { id: 54, name: 'Quần dài nữ', slug: 'quan-dai-nu', parent_id: 38, level: 3 },
      { id: 55, name: 'Quần nỉ nữ', slug: 'quan-ni-nu', parent_id: 38, level: 3 },
      { id: 56, name: 'Quần kaki nữ', slug: 'quan-kaki-nu', parent_id: 38, level: 3 },
      { id: 57, name: 'Quần short nữ', slug: 'quan-short-nu', parent_id: 38, level: 3 },
      { id: 58, name: 'Quần jeans nữ', slug: 'quan-jeans-nu', parent_id: 38, level: 3 },
      { id: 59, name: 'Quần âu nữ', slug: 'quan-au-nu', parent_id: 38, level: 3 },
    ],
  });

  // Danh mục con của Đồ bộ nữ
  await prisma.category.createMany({
    data: [
      { id: 60, name: 'Đồ bộ dài tay nữ', slug: 'do-bo-dai-tay-nu', parent_id: 39, level: 3 },
      { id: 61, name: 'Đồ bộ ngắn tay nữ', slug: 'do-bo-ngan-tay-nu', parent_id: 39, level: 3 },
    ],
  });

  // Danh mục con của Đồ mặc trong nữ
  await prisma.category.createMany({
    data: [
      { id: 62, name: 'Áo bra nữ', slug: 'ao-bra-nu', parent_id: 40, level: 3 },
      { id: 63, name: 'Quần lót nữ', slug: 'quan-lot-nu', parent_id: 40, level: 3 },
      { id: 64, name: 'Áo ba lỗ - Áo hai dây nữ', slug: 'ao-ba-lo-hai-day-nu', parent_id: 40, level: 3 },
      { id: 65, name: 'Áo giữ nhiệt nữ', slug: 'ao-giu-nhiet-nu', parent_id: 40, level: 3 },
    ],
  });

  // Danh mục con của Đồ thể thao nữ
  await prisma.category.createMany({
    data: [
      { id: 66, name: 'Quần thể thao nữ', slug: 'quan-the-thao-nu', parent_id: 41, level: 3 },
      { id: 67, name: 'Áo polo thể thao nữ', slug: 'ao-polo-the-thao-nu', parent_id: 41, level: 3 },
      { id: 68, name: 'Bộ thể thao nữ', slug: 'bo-the-thao-nu', parent_id: 41, level: 3 },
    ],
  });

  // Danh mục con của Đầm và chân váy
  await prisma.category.createMany({
    data: [
      { id: 69, name: 'Đầm nữ', slug: 'dam-nu', parent_id: 42, level: 3 },
      { id: 70, name: 'Chân váy nữ', slug: 'chan-vay-nu', parent_id: 42, level: 3 },
    ],
  });

  // Danh mục con của Phụ kiện nữ
  await prisma.category.createMany({
    data: [
      { id: 71, name: 'Tất nữ', slug: 'tat-nu', parent_id: 43, level: 3 },
      { id: 72, name: 'Túi xách nữ', slug: 'tui-xach-nu', parent_id: 43, level: 3 },
      { id: 73, name: 'Giày nữ', slug: 'giay-nu', parent_id: 43, level: 3 },
      { id: 74, name: 'Phụ kiện khác nữ', slug: 'phu-kien-khac-nu', parent_id: 43, level: 3 },
    ],
  });

  // === DANH MỤC TRẺ EM ===
  // Danh mục Trẻ em cấp 2
  await prisma.category.createMany({
    data: [
      { id: 75, name: 'Áo trẻ em', slug: 'ao-tre-em', parent_id: 3, level: 2 },
      { id: 76, name: 'Quần trẻ em', slug: 'quan-tre-em', parent_id: 3, level: 2 },
      { id: 77, name: 'Đồ bộ trẻ em', slug: 'do-bo-tre-em', parent_id: 3, level: 2 },
      { id: 78, name: 'Đồ mặc trong trẻ em', slug: 'do-mac-trong-tre-em', parent_id: 3, level: 2 },
      { id: 79, name: 'Đồ thể thao trẻ em', slug: 'do-the-thao-tre-em', parent_id: 3, level: 2 },
      { id: 80, name: 'Đầm và chân váy bé gái', slug: 'dam-va-chan-vay-be-gai', parent_id: 3, level: 2 },
      { id: 81, name: 'Phụ kiện trẻ em', slug: 'phu-kien-tre-em', parent_id: 3, level: 2 },
    ],
  });

  // Danh mục con của Áo trẻ em
  await prisma.category.createMany({
    data: [
      { id: 82, name: 'Áo khoác trẻ em', slug: 'ao-khoac-tre-em', parent_id: 75, level: 3 },
      { id: 83, name: 'Áo phao trẻ em', slug: 'ao-phao-tre-em', parent_id: 75, level: 3 },
      { id: 84, name: 'Áo hoodie trẻ em', slug: 'ao-hoodie-tre-em', parent_id: 75, level: 3 },
      { id: 85, name: 'Áo len trẻ em', slug: 'ao-len-tre-em', parent_id: 75, level: 3 },
      { id: 86, name: 'Áo thun trẻ em', slug: 'ao-thun-tre-em', parent_id: 75, level: 3 },
      { id: 87, name: 'Áo polo trẻ em', slug: 'ao-polo-tre-em', parent_id: 75, level: 3 },
    ],
  });

  // Danh mục con của Quần trẻ em
  await prisma.category.createMany({
    data: [
      { id: 88, name: 'Quần dài trẻ em', slug: 'quan-dai-tre-em', parent_id: 76, level: 3 },
      { id: 89, name: 'Quần short trẻ em', slug: 'quan-short-tre-em', parent_id: 76, level: 3 },
      { id: 90, name: 'Quần jeans trẻ em', slug: 'quan-jeans-tre-em', parent_id: 76, level: 3 },
    ],
  });

  // Danh mục con của Đồ bộ trẻ em
  await prisma.category.createMany({
    data: [
      { id: 91, name: 'Đồ bộ dài tay trẻ em', slug: 'do-bo-dai-tay-tre-em', parent_id: 77, level: 3 },
      { id: 92, name: 'Đồ bộ ngắn tay trẻ em', slug: 'do-bo-ngan-tay-tre-em', parent_id: 77, level: 3 },
    ],
  });

  // Danh mục con của Đồ mặc trong trẻ em
  await prisma.category.createMany({
    data: [
      { id: 93, name: 'Áo ba lỗ trẻ em', slug: 'ao-ba-lo-tre-em', parent_id: 78, level: 3 },
      { id: 94, name: 'Quần lót trẻ em', slug: 'quan-lot-tre-em', parent_id: 78, level: 3 },
      { id: 95, name: 'Áo giữ nhiệt trẻ em', slug: 'ao-giu-nhiet-tre-em', parent_id: 78, level: 3 },
    ],
  });

  // Danh mục con của Đồ thể thao trẻ em
  await prisma.category.createMany({
    data: [
      { id: 96, name: 'Quần thể thao trẻ em', slug: 'quan-the-thao-tre-em', parent_id: 79, level: 3 },
      { id: 97, name: 'Áo thể thao trẻ em', slug: 'ao-the-thao-tre-em', parent_id: 79, level: 3 },
      { id: 98, name: 'Bộ thể thao trẻ em', slug: 'bo-the-thao-tre-em', parent_id: 79, level: 3 },
    ],
  });

  // Danh mục con của Đầm và chân váy bé gái
  await prisma.category.createMany({
    data: [
      { id: 99, name: 'Đầm bé gái', slug: 'dam-be-gai', parent_id: 80, level: 3 },
      { id: 100, name: 'Chân váy bé gái', slug: 'chan-vay-be-gai', parent_id: 80, level: 3 },
    ],
  });

  // Danh mục con của Phụ kiện trẻ em
  await prisma.category.createMany({
    data: [
      { id: 101, name: 'Mũ trẻ em', slug: 'mu-tre-em', parent_id: 81, level: 3 },
      { id: 102, name: 'Tất trẻ em', slug: 'tat-tre-em', parent_id: 81, level: 3 },
      { id: 103, name: 'Phụ kiện trẻ em khác', slug: 'phu-kien-tre-em-khac', parent_id: 81, level: 3 },
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