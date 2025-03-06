import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private user: { username: string; role: 'employee' | 'hr' } | null = null;
  authenticationChanged = new EventEmitter<boolean>();
  private userKey = 'user';
  constructor(private router: Router) {}

  login(username: string, role: 'employee' | 'hr') {
    const user: Employee = { id: uuidv4(), username: username, role: role };
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.authenticationChanged.emit(true);
    if (role === 'hr') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/attendance']);
    }
  }

  logout() {
    localStorage.removeItem(this.userKey);
    this.authenticationChanged.emit(false);
    this.router.navigate(['/login']);
  }

  getUser(): Employee {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getRole() {
    return this.getUser().role;
  }
}
