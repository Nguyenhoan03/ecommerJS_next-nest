import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService){}
    
    async getcategory(slug: string) {
        const category = await this.prisma.category.findFirst({
            where: { slug:slug },
            include: {
                products: true
            }
        });

        return {
            ...category,
            products: category?.products || []
        };
    }
    async getCategoryNam_Nu_TreEm() {
        try {
            const getCategoriesWithChildren = async (parentId: number) => {
                const categories = await this.prisma.category.findMany({
                    where: { 
                        parent_id: parentId,
                        level: 2
                    },
                    orderBy: {
                        id: 'asc'
                    }
                });           
                const categoriesWithChildren = await Promise.all(
                    categories.map(async (category) => {
                        const subCategories = await this.prisma.category.findMany({
                            where: { 
                                parent_id: category.id,
                                level: 3 
                            },
                            orderBy: {
                                id: 'asc'
                            }
                            
                        });
                        return {
                            ...category,
                            subCategories
                        };
                    })
                );
    
                return categoriesWithChildren;
            };
    
            const [nam, nu, treEm] = await Promise.all([
                getCategoriesWithChildren(1),  
                getCategoriesWithChildren(2),   
                getCategoriesWithChildren(3)  
            ]);
    
            return {
                nam,
                nu, 
                treEm
            };
    
        } catch (error) {
            console.error('Lỗi khi lấy danh mục:', error);
            throw new Error('Không thể lấy danh mục');
        }
    }
}