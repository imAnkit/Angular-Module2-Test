import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecordsComponent } from './attendance/records/records.component';
import { AuthGuard } from './auth/auth.guard';
import { AdjustmentComponent } from './attendance/adjustment/adjustment.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'attendance', component: RecordsComponent, canActivate: [AuthGuard] },
  {
    path: 'adjustment',
    component: AdjustmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'hr' },
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
