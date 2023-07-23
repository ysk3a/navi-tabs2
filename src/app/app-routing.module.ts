import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BadRouteComponent } from './bad-route/bad-route.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/my-home', pathMatch: 'full'
  },
  {
    path: 'my-home', component: HomeComponent
  },
  {
    path: 'my-users', component: UsersComponent,
    children: [
      // dynamic url param using `:`
      {
        path: ':dynamic_id', component: UserDetailComponent
      }
    ]
  },
  { path: '**', component: BadRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
