import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Task List App';

  allTasks: Task[] = [
    { description: 'Walk the dog', completed: false },
    { description: 'Buy eggs and milk', completed: false },
    { description: 'Make dentist appointment', completed: true },
  ];

  addTask(newTask: Task): void {
    this.allTasks.unshift(newTask);
  }
}
