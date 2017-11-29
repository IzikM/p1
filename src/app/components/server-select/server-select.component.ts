import { Config, AServer } from './../../models/config';
import { OptionsService } from './../../services/options.service';
import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-select',
  templateUrl: './server-select.component.html',
  styleUrls: ['./server-select.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerSelectComponent implements OnInit, OnChanges {
  config: Config;
  serverSelect = 'selectServer';
  routeroutlet = 'router-outlet';
  theServer: AServer = {
    id: '',
    name: '',
    type: ''
  };
  constructor(
    private optionsService: OptionsService
  ) { }

  ngOnInit() {
    document.getElementById(this.routeroutlet).hidden = true;
    this.config = this.optionsService.getConfig();
    this.addServerSelection(this.serverSelect, 'בבקשה לבחור שרת מתאים', '');
    for (let i = 0; i < this.config.servers.servers.length; i++) {
      this.addServerSelection(this.serverSelect, this.config.servers.servers[i].name, this.config.servers.servers[i].id);
    }
    /*
    document.addEventListener('mousewheel', function (e) {
      console.log('a', e.defaultPrevented);  // will be false
      e.preventDefault();   // does nothing since the listener is passive
      console.log('b', e.defaultPrevented);  // still false
    }, true);
    */
  }

  private addServerSelection(elementId: string, name: string, id: string) {
    document.getElementById(elementId).innerHTML =
      document.getElementById(elementId).innerHTML +
      '<option value="' + id +
      '">' + name + '</option>';
  }

  doIt(selectServer: string) {
    let updateEvent = new Event('update');
    updateEvent = new Event('update');
    for (let i = 1; i < this.config.servers.servers.length; i++) {
      if (this.config.servers.servers[i].id = selectServer) {
        this.theServer = this.config.servers.servers[i];
        break;
      }
    }
    console.log(this.theServer);
    if (document.getElementById(this.serverSelect).childNodes[0].nodeName === '#text') {
      document.getElementById(this.serverSelect).removeChild(document.getElementById(this.serverSelect).childNodes[0]);
      document.getElementById(this.serverSelect).removeChild(document.getElementById(this.serverSelect).childNodes[0]);
      document.getElementById(this.routeroutlet).hidden = false;
    }
    document.getElementById(this.routeroutlet).dispatchEvent(updateEvent);
  }

  ngOnChanges() {
    console.log('select server ngOnChange');
  }
  getServer() {
    return this.theServer;
  }
}
