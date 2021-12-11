import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '85.95.237.78',
      port: 3306,
      username: 'monetapo_micro',
      password: '_nv_#UX;Btab',
      database: 'monetapo_micro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
