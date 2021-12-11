import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Module({
  imports:[TypeOrmModule.forFeature([Category]),
           HttpModule],
  exports:[TypeOrmModule],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
