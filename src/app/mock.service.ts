import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPostById(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

}
