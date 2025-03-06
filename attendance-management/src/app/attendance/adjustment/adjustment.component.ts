import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Adjustment } from 'src/app/models/adjustment.model';
import { Employee } from 'src/app/models/employee.model';
import { StoreAttendanceService } from 'src/app/services/store-attendance.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css'],
})
export class AdjustmentComponent implements OnInit {
  adjustmentForm!: FormGroup;
  requests: Adjustment[] = [];
  user: Employee | null = this.authService.getUser();
  constructor(
    private formBuilder: FormBuilder,
    private storeAttendance: StoreAttendanceService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.adjustmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      reason: ['', Validators.required],
      change: ['', Validators.required],
    });
    this.requests = this.storeAttendance
      .getAdjustments()
      .filter((a) => a.username === this.user?.username);
  }

  onSubmit() {
    if (this.adjustmentForm.valid) {
      if (!this.user) return;
      const newAdjustment: Adjustment = {
        id: uuidv4(),
        date: this.adjustmentForm.get('date')?.value,
        username: this.user.username,
        reason: this.adjustmentForm.get('reason')?.value,
        requestedChange: this.adjustmentForm.get('change')?.value,
        status: 'Pending',
      };
      this.storeAttendance.saveAdjustment(newAdjustment);
      this.requests.push({
        id: uuidv4(),
        username: this.user.username,
        date: this.adjustmentForm.get('date')?.value,
        reason: this.adjustmentForm.get('reason')?.value,
        requestedChange: this.adjustmentForm.get('change')?.value,
        status: 'Pending',
      });
      console.log('Request Submitted: ', this.adjustmentForm.value);
    }
  }
}
