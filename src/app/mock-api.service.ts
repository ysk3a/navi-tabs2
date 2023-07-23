import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPostById(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

}
