import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { TaskComponent } from './my-tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MyTasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
