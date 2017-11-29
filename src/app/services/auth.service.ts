import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';

@Injectable()
export class AuthService {
  auth: Auth;
  localAuth: Auth = {
    id: 'Isaac',
    membership: ['Production']
  };

  constructor() { }

  getAuth() {
    this.auth = this.localAuth;
    return this.auth;
  }
}
