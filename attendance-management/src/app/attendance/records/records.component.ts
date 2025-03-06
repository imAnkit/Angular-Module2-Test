import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Attendance } from 'src/app/models/attendance.model';
import { Employee } from 'src/app/models/employee.model';
import { StoreAttendanceService } from 'src/app/services/store-attendance.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  attendanceForm!: FormGroup;
  attendances: Attendance[] = [];

  user: Employee | null = this.authService.getUser();
  constructor(
    private formBuilder: FormBuilder,
    private storeAttendanceService: StoreAttendanceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.attendanceForm = this.formBuilder.group({
      date: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
    this.attendances = this.storeAttendanceService
      .getAttendances()
      .filter((a) => a.username === this.user?.username);
  }

  onSubmit() {
    if (this.attendanceForm.valid) {
      if (!this.user) return;
      const newAttendance: Attendance = {
        id: uuidv4(),
        date: this.attendanceForm.get('date')?.value,
        username: this.user.username,
        checkIn: this.attendanceForm.get('checkIn')?.value,
        checkOut: this.attendanceForm.get('checkOut')?.value,
      };
      this.storeAttendanceService.saveAttendance(newAttendance);
      this.attendances.push(newAttendance);
      console.log('Request Submitted: ', this.attendanceForm.value);
    }
  }
}
