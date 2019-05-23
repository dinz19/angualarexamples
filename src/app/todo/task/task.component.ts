import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = []
   todo = ""
  constructor() { }

  ngOnInit() {
  }
 
  addTodo = function(something)
  {
    
    this.tasks.push(something.value.todo)
    console.log(this.tasks)
    this.todo=""
  }

  taskCompleted = function(current){
    this.tasks.splice(current,1)
  }
}
