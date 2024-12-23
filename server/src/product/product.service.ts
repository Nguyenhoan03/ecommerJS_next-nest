import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }
  constructor(private prisma : PrismaService){}

  async findAll() {
    return this.prisma.product.findMany({
     take: 8,
      orderBy: {
        created_at: 'desc' 
      }
    });
  }

  async findByCategory(categorySlug: string) {
    const products = await this.prisma.product.findMany({
      where: {
        categories: {
          some: {
            slug: categorySlug
          }
        }
      },
      include: {
        categories: true,
        details: true
      },
      take: 15,
      orderBy: {
        created_at: 'desc'
      }
    });
  
    return products;
  }

  async getproduct(slug: string) {
    const data = await this.prisma.detailProduct.findFirst({
      where: {
        product: {
          name: slug  
        }
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            discount_percent: true,
            sold: true,
            image: true,
            total_reviews: true,
            created_at: true,
            updated_at: true
          }
        }
      }
    });
  
    if (!data) {
      throw new NotFoundException('Không tìm thấy sản phẩm');
    }
    const images = data.images.map(image => image.replace(/[{()}]/g, '').split(',')).flat();


    return {
      id: data.id,
      productId: data.product_id,
      name: data.product.name,
      image: data.product.image,
      price: data.product.price,
      discount: data.product.discount_percent,
      rating: 4.5, 
      reviewCount: data.product.total_reviews || 0,
      soldCount: data.product.sold || 0,
      color: data.color,
      size: data.size,
      quantity: data.quantity,
      images: images,
      description: data.description,
      created_at: data.product.created_at,
      updated_at: data.product.updated_at
    };
  }
}
