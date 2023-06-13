
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navi-tab2';
  links = ['Welcome'];// ['/home', '/about', '/price'];
  activeLink = this.links[0];


  addTab(path: string) {
    this.activeLink = path;//'/price-detail2'"
    this.links.push(path)
  }
}
