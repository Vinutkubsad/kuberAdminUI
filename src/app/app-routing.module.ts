import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component'
import { AuthGaurd } from './services/AuthGuard.Admin'
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';
import { ApproveCharityComponent } from './adminComponents/admin-das/approve-charity/approve-charity.component';
import { DesableCharityComponent } from './adminComponents/admin-das/all-charity/desable-charity.component';
import { EditCharityComponent } from './adminComponents/admin-das/edit-charity/edit-charity.component';
import { RejectCharityComponent } from './adminComponents/admin-das/reject-charity/reject-charity.component';
import { ProfileComponent } from './adminComponents/admin-das/profile/profile.component';

export const routes: Routes = [

  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'dashboard', component: AdminDasComponent,
    children: [
    { path: 'approve-charity', component: ApproveCharityComponent },
    { path: 'desable-charity', component: DesableCharityComponent },
    { path: 'edit-charity/:id', component: EditCharityComponent },
    { path: 'reject-charity', component: RejectCharityComponent },
    { path: 'profile', component: ProfileComponent }
  ]
  },
  { path: "", redirectTo: "adminlogin", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
