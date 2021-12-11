import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, HttpServer, Post } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { interval, firstValueFrom } from 'rxjs';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService,
                private httpService: HttpService){

    }

    @Get()
    async all() {

        let categories = await   this.categoryService.find();
        categories.forEach(category =>{
          
        })
        console.log(11);
        for (const category of categories) {
        
            try {
               
                console.log('Wait response');
                await (this.httpService.get(`http://localhost:8001/api/product/${category.id}/category`).subscribe(products=>{
                    category.products =  products.data;
                    console.log(category);
                }));
                console.log('end response');
            } catch (error) {
                
            }
        }
        console.log(2);

        return categories;
    }

    @Post()
    async create(
        @Body('title') title: string,
        @Body('description') description: string,
    ){
      
        this.categoryService.create({title,description});
    }


}
 