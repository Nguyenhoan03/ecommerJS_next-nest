import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Get,Param } from '@nestjs/common';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':slug')
  findAll(@Param('slug') slug : string) {
     return this.categoryService.getcategory(slug);
  }
}
