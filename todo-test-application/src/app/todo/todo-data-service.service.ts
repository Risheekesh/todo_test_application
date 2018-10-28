import { Injectable } from '@angular/core';
import { Todo} from './todo'

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {
    if (localStorage.getItem("todos")) {
      let todosString=localStorage.getItem("todos");
      this.todos=JSON.parse(todosString);
      this.lastId=this.todos.slice(-1).pop().id;
    }
  }

  addTodo(todo: Todo,color:string): Todo[] {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    return (color)?this.getTodoByColorCode(color):this.todos;
  }

  deleteTodoById(id: number, color:string): Todo[] {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    
    localStorage.setItem("todos",JSON.stringify(this.todos));
    return (color)?this.getTodoByColorCode(color):this.todos;
  }

  //get all todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // get todo by /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // get todo by /todos/:id
  getTodoByColorCode(colorCode: String): Todo[] {
    let data=this.todos
      .filter(todo => todo.color === colorCode);
      return data;
  }

}

