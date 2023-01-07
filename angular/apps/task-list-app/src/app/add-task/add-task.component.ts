import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() newTaskEvent = new EventEmitter<Task>();

  addNewTask(description: string) {
    this.newTaskEvent.emit({ description, completed: false });
  }
}
