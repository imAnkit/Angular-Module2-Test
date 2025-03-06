import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Attendance } from 'src/app/models/attendance.model';
import { StoreAttendanceService } from 'src/app/services/store-attendance.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  attendances: Attendance[] = [];
  constructor(
    private storeAttendanceService: StoreAttendanceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.attendances =
      user?.role === 'hr'
        ? this.storeAttendanceService.getAttendances()
        : this.storeAttendanceService
            .getAttendances()
            .filter((a) => a.username === user?.username);
  }
}
