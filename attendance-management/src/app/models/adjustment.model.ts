export interface Adjustment {
  id: string;
  username: string;
  date: string;
  reason: string;
  requestedChange: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
