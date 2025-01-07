import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Get,Param } from '@nestjs/common';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('getcategoryNam_Nu_TreEm')
  findAllNam() {
    return this.categoryService.getCategoryNam_Nu_TreEm();
  }
  @Get(':slug')
  findAll(@Param('slug') slug : string) {
     return this.categoryService.getcategory(slug);
  }
}
