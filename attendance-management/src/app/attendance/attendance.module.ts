import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records/records.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecordsComponent, AdjustmentComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AttendanceModule {}
