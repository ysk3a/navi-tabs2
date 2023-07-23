import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<any> = new Observable();
  constructor(private mock: MockApiService) { }
  ngOnInit(): void {
    this.users$ = this.mock.getUsers();
  }
}
