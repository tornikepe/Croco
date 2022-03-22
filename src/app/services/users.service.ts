import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  // გამოყენებულია მხოლოდ get request რადგან ამ პროექტში მხოლოდ user-ის მონაცემების წაკითხვა იყო საჭირო
  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'users');
  }
  getUserId(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'users/' + id);
  }
  getUserPosts(id: string): Observable<any> {
    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/comments?postId=' + id
    );
  }
}
