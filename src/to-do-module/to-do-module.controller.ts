import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { elementAt, find } from 'rxjs';
import {v4 as uuidv4} from 'uuid';
import { TodoDto } from './todoDTO/todoDTO';

enum TodoStatutEnum{
    'actif'="en cours",
    'waiting'="En attente",
    'done'="Finalisé"
}

class ToDoModel{
    id: string = uuidv4();
    name: string;
    description: string;
    dateDeCreation: Date;
    statut: TodoStatutEnum;
    constructor (name: string,description: string,){
        //this.id=new Date(),
        this.name=name,
        this.description=description,
        this.dateDeCreation= new Date(),
        this.statut=TodoStatutEnum.waiting
    };
}
@Controller('todo')
export class ToDoModuleController {
    private todos=[];
    
   @Get('get')
   getTodos(){
       return this.todos ;
   }


  /*@Post('post')
  addTodo(@Body() data ){
    const {name, description} = data;
    const todo = new ToDoModel(name,description)
    this.todos.push(todo);
    return this.todos ; 
  }
*/ 
 //AVEC DTO
  @Post('post')
 addTodo(@Body() TodoDto : TodoDto ){
  
  const todo = new ToDoModel(TodoDto.name,TodoDto.description)
  this.todos.push(todo);
  return this.todos ; 
}
 
  



  @Get(':id')
  getbyId(@Param('id') id){
     return this.todos.find(todo => todo.id ===id);

  } 
  @Delete(':id')
  deletebyId(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    return 'c bon';
  }

 @Put(':id')
 modibyId(@Param('id') id, @Body() Todo: ToDoModel) {
    const todo = this.todos.find((todo) => todo.id == id);

    if (Todo.name) {
      todo.name = Todo.name;
    }
    if (Todo.description) {
      todo.description = Todo.description;
    }
    if (Todo.statut) {
      todo.status = Todo.statut;
    }
    return todo;
  }
}
