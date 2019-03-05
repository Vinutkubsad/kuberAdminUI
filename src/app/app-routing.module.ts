import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component'
import {AuthGaurd}from './services/AuthGuard.Admin'
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';

export const routes: Routes = [
  
  { path:'adminlogin', component: AdminLoginComponent },
  { path:'dashboard', component: AdminDasComponent},
  { path: "", redirectTo: "adminlogin", pathMatch: "full" }
  //  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
