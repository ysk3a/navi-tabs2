import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'navi-tab';

  navLinks: any[] = [];
  activeLinkIndex = -1;
  activeLink = this.navLinks[0];
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'TabTest1',
        link: './tabtest1',
        index: 0
      }, {
        label: 'Tab Test2',
        link: './tabtest2',
        index: 1
      }, {
        label: 'Tab Test3',
        link: './tabtest3',
        index: 2
      },
      {
        label: 'my-home',
        link: './my-home',
        index: 3
      },
      {
        label: 'my-users',
        link: './my-users',
        index: 4
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  addLink() {
    let nextLink: number = this.navLinks.length + 1;
    this.navLinks.push({
      label: `Link ${nextLink}`,
      link: `./${nextLink}`,
      index: nextLink
    });
  }
}
