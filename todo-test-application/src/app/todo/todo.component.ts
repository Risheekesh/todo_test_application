import { Component, OnInit } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoDataService]
})
export class TodoComponent {

  newTodo: Todo = new Todo();
  todos:any=[];
  currentFilterValue:string;

  constructor(private todoDataService: TodoDataService, private router: Router) {
    if(this.router.url.indexOf('red')>-1){
      this.currentFilterValue="red";
      this.todos=this.todoDataService.getTodoByColorCode(this.currentFilterValue);
    }else if(this.router.url.indexOf('green')>-1){
      this.currentFilterValue="green";
      this.todos=this.todoDataService.getTodoByColorCode(this.currentFilterValue);
    }else if(this.router.url.indexOf('blue')>-1){
      this.currentFilterValue="blue";
      this.todos=this.todoDataService.getTodoByColorCode(this.currentFilterValue);
    }else{
      this.todos=this.todoDataService.getAllTodos();      
    }
  }

  addTodo() {
    if(this.newTodo.title.trim() && this.newTodo.color){
      this.todos=this.todoDataService.addTodo(this.newTodo,this.currentFilterValue);
      this.newTodo = new Todo();
    }else{
      alert("Todo name or color is missing!");
    }
  }

  removeTodo(todo) {
    this.todos=this.todoDataService.deleteTodoById(todo.id,this.currentFilterValue);
  }

}
