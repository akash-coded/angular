import { Component, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
})
export class MyTasksComponent {
  filter: 'all' | 'completed' | 'incomplete' = 'all';

  @Input() allTasks: Task[] = [];

  get tasks(): Task[] {
    if (this.filter === 'all') {
      return this.allTasks;
    }

    return this.allTasks.filter((task) =>
      this.filter === 'completed' ? task.completed : !task.completed
    );
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  changeFilter(filter: 'all' | 'completed' | 'incomplete'): void {
    this.filter = filter;
  }
}
