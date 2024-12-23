import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService){}
    
    async getcategory(slug: string) {
        const category = await this.prisma.category.findFirst({
            where: { slug },
            include: {
                products: true
            }
        });

        return {
            ...category,
            products: category?.products || []
        };
    }
}