import { Component } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  records = [
    { date: '', checkIn: '9:00 A.M', checkOut: '5:00 P.M', status: 'Present' },
    { date: '', checkIn: '9:20 A.M', checkOut: '5:30 P.M', status: 'Present' },
  ];
}
