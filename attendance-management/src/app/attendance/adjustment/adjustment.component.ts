import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css'],
})
export class AdjustmentComponent implements OnInit {
  adjustmentForm!: FormGroup;
  requests = [{ date: '2025-03-05', reason: 'Forgot', status: 'Pending' }];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.adjustmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      reason: ['', Validators.required],
      change: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.adjustmentForm.valid) {
      this.requests.push({ ...this.adjustmentForm.value, status: 'Pending' });
      console.log('Request Submitted: ', this.adjustmentForm.value);
    }
  }
}
