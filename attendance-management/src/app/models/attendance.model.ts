export interface Attendance {
  id: number;
  username: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Pending';
}
