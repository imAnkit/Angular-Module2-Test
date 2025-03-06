import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;
  constructor() {}

  login(username: string, role: 'employee' | 'hr') {
    this.user = { username, role };
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isLoggedIn() {
    return !!this.getUser();
  }

  getRole() {
    return this.getUser()?.role;
  }
}
