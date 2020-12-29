import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks:Array<string> = [];

  constructor() { }

  getAllTasks(){
    return this.tasks;
  }

  createTask(task:string){
    this.tasks.push(task);
  }

}
