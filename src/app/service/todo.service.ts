import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];//todos of type array of type Todo bcz thats why our model was created
  constructor() { 
    this.todos=[
      {
        id:'111',
        title: "Learn C++",
        isCompleted: true,
        date: new Date()
      },
      {
        id:'112',
        title: "Learn Java",
        isCompleted: true,
        date: new Date()
      },
      {
        id:'113',
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      }
    ];
  }

  //we need to get the above constructor or precisely the value inside the constructor as a ovservable to that component
  //and that is the presise sreason we are doing this "of" 
  getTodos(){
    //now just by osing "OF" operator we have made this array todo as a simple observable
    return of(this.todos); //"OF" operator make things observable
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  changeStatus(todo:Todo){
    this.todos.map(singleTodo => {//this is how you fire up a callback
      //for every single toDo i wanto check for a condition 
      if(singleTodo.id==todo.id){
        todo.isCompleted=!todo.isCompleted; 
      }
    });
  }
  deleteTodo(todo:Todo){
    const indexOfTodo=this.todos.findIndex(//this indexoftodo holds the id from the array which matches the id of the todo which you have provided to me
      (currentObj) =>currentObj.id === todo.id
    );
    this.todos.splice(indexOfTodo,1);//delete
  }
}
