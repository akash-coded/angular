import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postId?: number;
  userId?: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .post<any>('https://reqres.in/api/posts', {
        title: 'Angular POST Request Example',
      })
      .subscribe((data) => {
        this.postId = data.id;
      });
  }

  createUser() {
    this.http
      .post<any>('https://reqres.in/api/users', {
        name: 'morpheus',
        job: 'leader',
      })
      .subscribe((data) => {
        this.userId = data.id;
      });
  }
}
