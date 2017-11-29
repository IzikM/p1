import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { BrowserModule } from '@angular/platform-browser';

import { Config } from './../../models/config';
import { OptionsService } from './../../services/options.service';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class NavbarComponent implements OnInit {
  config: Config;
  navBarHtml: string;

  constructor(
    private optionsService: OptionsService,
    private authService: AuthService
  ) { }

  // This is where initialization code for the class is executed,
  // rather than in the constructor! Read about it online
  ngOnInit() {

    const navBarId = 'pepperNavBar';
    console.log(this);
    console.log(this);
    console.log(this);
    console.log(this);
    console.log(this);
    console.log(this.optionsService);
    console.log(this.optionsService);
    console.log(this.optionsService);
    console.log(this.optionsService);
    console.log(this.optionsService);
    console.log(this.optionsService);
    this.config = this.optionsService.getConfig();
    this.addRoutePage(navBarId, 'Init', '');
    for (let i = 0; i < this.config.pages.pages.length; i++) {
      if (this.config.pages.pages[i].groups[0] !== 'None') {
        this.addRoutePage(navBarId, this.config.pages.pages[i].route, this.config.pages.pages[i].name);
      }
      }
    this.addRoutePage(navBarId, 'Close', '');
    this.addRoutePage(navBarId, 'Store', '');
  }

  // Add a single navigation option to the navigation bar
  addRoutePage(id: string, route: string, pageName: string) {
    if (document.getElementById(id) === null) {
      console.log('Element ' + id + 'not identified. Unable to add route ' + route + ' for page ' + pageName);
    } else {
      if (route === 'Init') {
        this.navBarHtml =
          '  <ul _ngcontent-c1 class="navbar-nav mr-auto"> ';
      } else if (route === 'Close') {
        this.navBarHtml = this.navBarHtml +
          '  </ul>';
      } else if (route === 'Store') {
        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML +
          this.navBarHtml;
          console.log(this.navBarHtml);
      } else {
        this.navBarHtml = this.navBarHtml +
          '     <li _ngcontent-c1 class="nav-item">' +
          '         <a _ngcontent-c1 class="nav-link" href="' +
          route +
          '" routerLink="' +
          route +
          '" ng-reflect-router-link="' +
          route +
          '">' +
          pageName + '</a>' +
          '     </li>';
      }
    }
  }
}
