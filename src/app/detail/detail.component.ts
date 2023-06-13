import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  implements OnInit{
  // listen to the change in the url param to call proper backend
  // oninit run onces when the first route is navigated to. any child routes navigated won't call ngoninit
  post$: Observable<any> = new Observable();
  constructor(private mock: MockService, private activatedRoute: ActivatedRoute) {}
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
