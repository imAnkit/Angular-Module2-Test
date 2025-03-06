import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userrole: 'hr' | 'employee' = 'employee';
  loggedIn = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.userrole = user.role;
      this.loggedIn = this.authService.isLoggedIn();
      this.authService.authenticationChanged.subscribe((value) => {
        this.loggedIn = value;
        this.userrole = this.authService.getRole();
      });
    }
  }

  logOut() {
    this.authService.logout();
  }
}
