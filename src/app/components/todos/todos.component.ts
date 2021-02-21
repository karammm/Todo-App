import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from "./../../model/Todo"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt=faTrashAlt;//NOW IT can be used as a veraiable any where
  todos:Todo[];//from the modelinjected
  
  constructor(private TodoService:TodoService) { }

  ngOnInit() {
  }

}
