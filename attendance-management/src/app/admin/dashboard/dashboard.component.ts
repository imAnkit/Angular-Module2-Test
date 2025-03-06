import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  requests = [
    {
      date: '2024-03-05',
      employee: 'Ankit Singh',
      reason: 'Forgot',
      status: 'Pending',
    },
    {
      date: '2024-03-08',
      employee: 'Ankur Singh',
      reason: 'Wrong checkin',
      status: 'Pending',
    },
  ];

  onApprove(request: any) {
    request.status = 'Approved';
  }
  onReject(request: any) {
    request.status = 'Rejected';
  }
}
