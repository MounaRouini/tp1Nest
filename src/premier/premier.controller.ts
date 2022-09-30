import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('premier')
export class PremierController {
    @Get()
    getNom(){
        console.log('get')
    }
    @Post()
    postNom(){
        console.log('Post')
    }
    @Delete()
    deleteNom(){
        console.log('delete')
    }
    @Put()
    putNom(){
        console.log('put')
    }
    @Patch()
    pATCHNom(){
        console.log('patch')
    }

}
