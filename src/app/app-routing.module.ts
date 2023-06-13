import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { EmptyTabComponent } from './empty-tab/empty-tab.component';
import { BadRouteComponent } from './bad-route/bad-route.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Welcome',  pathMatch: 'full' },
  { path: 'Welcome', component: EmptyTabComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // dynamic url param using `:`
      {
        path: ':dynamic_id', component: DetailComponent
      }
    ]

  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      // dynamic url param using `:`
      {
        path: ':dynamic_id', component: DetailComponent
      }
    ]
  },
  {
    path: 'price',
    component: PriceComponent,
    children: [
      // dynamic url param using `:`
      {
        path: ':dynamic_id', component: DetailComponent
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
