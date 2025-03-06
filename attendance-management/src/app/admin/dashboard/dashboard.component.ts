import { Component, OnInit } from '@angular/core';
import { Adjustment } from 'src/app/models/adjustment.model';
import { StoreAttendanceService } from 'src/app/services/store-attendance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  requests: Adjustment[] = [];
  constructor(private storeAttendanceService: StoreAttendanceService) {}
  ngOnInit(): void {
    this.requests = this.storeAttendanceService.getAdjustments();
  }
  onApprove(request: any) {
    request.status = 'Approved';
    this.storeAttendanceService.updateAdjustment(request);
  }
  onReject(request: any) {
    request.status = 'Rejected';
    this.storeAttendanceService.updateAdjustment(request);
  }
}
