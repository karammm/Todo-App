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

  getTodos(){
    
  }
}
