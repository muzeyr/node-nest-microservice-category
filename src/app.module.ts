import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
