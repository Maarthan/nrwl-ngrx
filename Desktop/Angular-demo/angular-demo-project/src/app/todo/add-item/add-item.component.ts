import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  taskForm:FormGroup;
  message:boolean = false;

  constructor(private todoService:TodoService, private formBuilder:FormBuilder) { 
    this.taskForm = formBuilder.group({
      task: ['',[Validators.required]]
    })
  }

  get newTask(){
    return this.taskForm.get('task') as FormControl;
  }

  ngOnInit(): void {

  }

  addTask(){
    this.message = true
    this.todoService.createTask(this.newTask.value);
    this.removeMessage();
    this.taskForm.reset();
  }

  getErrorMessage() {
    if ( (this.newTask.touched || this.newTask.dirty) && this.newTask.hasError('required')) {
      return 'You must enter a value';
    }
  }

  removeMessage(){
    setTimeout(()=>{
      this.message = false
    },2000)
  }

}
