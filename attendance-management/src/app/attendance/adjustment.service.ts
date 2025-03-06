import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdjustmentService implements OnInit {
  private attendanceKey = 'attendanceRecords';
  constructor() {}
  ngOnInit(): void {}

  getAdjustmentsForUser(username: string, role: 'employee' | 'hr') {
    const requests: {
      username: string;
      date: string;
      reason: string;
      status: string;
    }[] = JSON.parse(localStorage.getItem(this.attendanceKey) || '[]');
    return role === 'hr'
      ? requests
      : requests.filter((r) => r.username === username);
  }

  addAdjustments(
    request: {
      username: string;
      date: string;
      reason: string;
      status: string;
    },
    username: string,
    Date: DateConstructor,
    p0: unknown,
    reason: any,
    p1: unknown,
    status: string,
    p2: string
  ) {
    const requests: {
      username: string;
      date: string;
      reason: string;
      status: string;
    }[] = JSON.parse(localStorage.getItem(this.attendanceKey) || '[]');
    requests.push(request);
    localStorage.setItem(this.attendanceKey, JSON.stringify(requests));
  }

  updateAdjustment(index: number, updatedRequest: any) {
    const requests: {
      username: string;
      date: string;
      reason: string;
      status: string;
    }[] = JSON.parse(localStorage.getItem(this.attendanceKey) || '[]');
    requests[index] = updatedRequest;

    localStorage.setItem(this.attendanceKey, JSON.stringify(requests));
  }
}
