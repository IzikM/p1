import { BackEndService } from './back-end.service';
import { AuthService } from './auth.service';
import { Auth } from './../models/auth';
import { AServer, APage, AMenuItem, AServerList, APageList, AMenuItemList, Config } from './../models/config';
import { Injectable } from '@angular/core';

@Injectable()
export class OptionsService {
  config: Config;
  anObject: object;
  auth: Auth;
  invocation = 0;
  configLocal: Config = {
    debugLevel: 'Debug',
    server: {
      id: '', name: '', type: ''
    },
    servers: {
      servers: [
        {
          id: 'TLDB1',
          name: 'Test primary server - TLDB1',
          type: 'Main'
        },
        {
          id: 'TLDB2',
          name: 'Test secondary server - TLDB2',
          type: 'Auxiliary'
        },
        {
          id: 'NFT',
          name: 'NFT primary server - NFT',
          type: 'Main'
        },
        {
          id: 'ALDB1',
          name: 'Staging primary server - ALDB1',
          type: 'Main'
        },
        {
          id: 'ALDB2',
          name: 'Staging secondary server - ALDB2',
          type: 'Auxiliary'
        },
        {
          id: 'PLDB1',
          name: 'Production primary server - PLDB1',
          type: 'Main'
        },
        {
          id: 'PLDB2',
          name: 'Production secondary server - PLDB2',
          type: 'Auxiliary'
        }
      ]
    },
    pages: {
      pages: [
        {
          name: 'Vitality',
          route: '/Vitality',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Services',
          route: '/Services',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Otp',
          route: '/Otp',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Templates',
          route: '/Templates',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Template',
          route: '/Template',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Trace',
          route: '/Trace',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'PageNotFound',
          route: '/PageNotFound',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        },

        {
          name: 'Configcntrl',
          route: '/Configcntrl',
          groups: ['Production', 'Product', 'Kav2', 'QA', 'Test'],
          serverType: 'Main'
        }
      ]
    },
    menuItems: {
      menuItem: [
        {
          name: 'Vitality'
        },
        {
          name: 'Config Control'
        }
      ]
    }
  };

  constructor(private authService: AuthService,
    private backEndService: BackEndService) { }

  getConfig() {

    this.invocation++;
    this.config = this.backEndService.getInfo('config');
    if (this.invocation === 1) {
      console.log('config', this.config);
    }
    this.auth = this.authService.getAuth();
    for (let i = 0; i < this.config.pages.pages.length; i++) {
      let isAllowed = false;
      for (let j = 0; j < this.auth.membership.length; j++) {
        for (let k = 0; k < this.config.pages.pages[i].groups.length; k++) {
          if (this.config.pages.pages[i].groups[k] === this.auth.membership[j]) {
            isAllowed = true;
          }
        }
      }
      if (!isAllowed) {
        this.config.pages.pages[i] = null;
      }
    }

    for (let i = 0; i < this.config.pages.pages.length; i++) {
      while (this.config.pages.pages[i] === null && i < this.config.pages.pages.length) {
        this.config.pages.pages.splice(i, 1);
      }

    }

    if ((this.config.debugLevel = 'Debug') && (this.invocation === 1)) {
      this.logConfig(this.config);
    }
    return this.config;
  }

  logConfig(config: Config) {
    console.log('config', config);
    const headTxt = 'Options config: ';
    for (let i = 0; i < config.servers.servers.length; i++) {
      console.log(headTxt + 'Srv[' + i + ']:Id ' + config.servers.servers[i].id +
        '. Name ' + config.servers.servers[i].name +
        '. Type ' + config.servers.servers[i].type);
    }

    for (let i = 0; i < config.pages.pages.length; i++) {
      if (config.pages.pages[i].groups[0] !== 'None') {
        let auths = '';
        for (let ii = 0; ii < config.pages.pages[i].groups.length; ii++) {
          auths = auths + '\\' + config.pages.pages[i].groups[ii];
        }
        console.log(headTxt + 'page[' + i + ']:page ' + config.pages.pages[i].name +
          '. route ' + config.pages.pages[i].route +
          '. auth ' + auths +
          '. serverType ' + config.pages.pages[i].serverType);
      }
    }

    for (let i = 0; i < config.menuItems.menuItem.length; i++) {
      console.log(headTxt + 'menuItem[' + i + ']:page ' + config.menuItems.menuItem[i].name);
    }

  }
}
