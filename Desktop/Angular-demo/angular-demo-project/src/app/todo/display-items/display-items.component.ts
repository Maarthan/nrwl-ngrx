import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit {

  allTasks:Array<string>;
  value:string = '';

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.allTasks = this.todoService.getAllTasks();
  }

}
