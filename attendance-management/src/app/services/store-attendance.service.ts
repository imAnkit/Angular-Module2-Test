import { Injectable } from '@angular/core';
import { Attendance } from '../models/attendance.model';
import { Adjustment } from '../models/adjustment.model';

@Injectable({
  providedIn: 'root',
})
export class StoreAttendanceService {
  private attendanceKey = 'attendanceRecords';
  private adjustmentKey = 'adjustmentRequests';

  constructor() {}

  getAttendances(): Attendance[] {
    return JSON.parse(localStorage.getItem(this.attendanceKey) || '[]');
  }

  saveAttendance(attendance: Attendance) {
    const records = this.getAttendances();
    records.push(attendance);
    localStorage.setItem(this.attendanceKey, JSON.stringify(records));
  }

  getAdjustments(): Adjustment[] {
    return JSON.parse(localStorage.getItem(this.adjustmentKey) || '[]');
  }

  saveAdjustment(adjustment: Adjustment) {
    const records = this.getAdjustments();
    records.push(adjustment);
    localStorage.setItem(this.adjustmentKey, JSON.stringify(records));
  }

  updateAdjustment(adjustment: Adjustment) {
    const records = this.getAdjustments();
    const index = records.findIndex((i) => i.id === adjustment.id);
    if (index != -1) {
      records[index] = adjustment;
      localStorage.setItem(this.adjustmentKey, JSON.stringify(records));
    }
  }
}
