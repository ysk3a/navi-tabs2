import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  // listen to the change in the url param to call proper backend
  // oninit run onces when the first route is navigated to. any child routes navigated won't call ngoninit
  post$: Observable<any> = new Observable();
  constructor(private mock: MockApiService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    console.log('::oninit UserDetail')
    this.post$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        console.log('::paramMap.switchMap Params=', params);
        const id = Number(params.get('dynamic_id'));
        return this.mock.getPostById(id)
      })
    )
  }


}
