import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';

import { ServerSelectComponent } from './../server-select/server-select.component';
import { Config, AServer } from './../../models/config';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServicesComponent implements OnInit, OnChanges {
  theServer: AServer;

  constructor(
    private serverSelectComponent: ServerSelectComponent
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.serverSelectComponent.getServer());
    this.theServer = this.serverSelectComponent.getServer();

    document.addEventListener('mousewheel', function (e) {
      console.log('a', e.defaultPrevented);  // will be false
      e.preventDefault();   // does nothing since the listener is passive
      console.log('b', e.defaultPrevented);  // still false
    }, true);
/*
    document.addEventListener(
      'update',
      this.ngOnChanges,
      false
    );
*/
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    console.log(this.serverSelectComponent.getServer());
    this.theServer = this.serverSelectComponent.getServer();
  }
}
