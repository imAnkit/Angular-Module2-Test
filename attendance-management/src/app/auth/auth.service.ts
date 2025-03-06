import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: { username: string; role: 'employee' | 'hr' } | null = null;
  authenticationChanged = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  login(username: string, role: 'employee' | 'hr') {
    this.user = { username, role };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.authenticationChanged.emit(true);
    if (role === 'hr') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/attendance']);
    }
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.authenticationChanged.emit(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getRole() {
    return this.getUser()?.role;
  }

  getUsername() {
    return this.user ? this.user.username : null;
  }
}
