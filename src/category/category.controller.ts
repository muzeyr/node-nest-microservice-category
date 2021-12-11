import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, HttpServer, Param, Post } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { interval, firstValueFrom } from 'rxjs';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService){

    }

    @Get()
    async all() {
        return this.categoryService.find();
        /*
        let categories = await   this.categoryService.find();
        for (const category of categories) {
            try {
                await (this.httpService.get(`http://localhost:8001/api/product/${category.id}/category`).subscribe(products=>{
                    category.products =  products.data;
                    console.log(category);
                }));
            } catch (error) {
                
            }
        }
        return categories;
        */
    }

    @Post()
    async create(
        @Body('title') title: string,
        @Body('description') description: string,
    ){
      
        this.categoryService.create({title,description});
    }
     
    @Post(':id/product')
   async createProduct(@Param('id') id: number,
                        @Param('name') name: string){
       const category = await this.categoryService.findOne(id);
       const products =  category.products;
       console.log(123);
       products.push({name});
       
       category.products = products;
       await this.categoryService.create(category);
       return category;

     
   }



}
 