import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  role: 'employee' | 'hr' = 'employee';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.role);
  }
}
