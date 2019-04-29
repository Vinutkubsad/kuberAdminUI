import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service';
import { NgbModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { AuthGaurd } from './services/AuthGuard.Admin';
import { AuthGaurd1 } from './services/AuthGuard.Charity';
// import { DataService } from '../app/data.service';
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';
import { NavBarComponent } from './adminComponents/nav-bar/nav-bar.component';
import { FooterComponent } from './adminComponents/footer/footer.component';
import { ApproveCharityComponent } from './adminComponents/admin-das/approve-charity/approve-charity.component';
import { DesableCharityComponent } from './adminComponents/admin-das/all-charity/desable-charity.component';
import { SideBarComponent } from './adminComponents/side-bar/side-bar.component';
import { RejectCharityComponent } from './adminComponents/admin-das/reject-charity/reject-charity.component';
import { EditCharityComponent } from './adminComponents/admin-das/edit-charity/edit-charity.component';
import { ProfileComponent } from './adminComponents/admin-das/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDasComponent,
    NavBarComponent,
    FooterComponent,
    ApproveCharityComponent,
    DesableCharityComponent,
    SideBarComponent,
    RejectCharityComponent,
    EditCharityComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    MatProgressSpinnerModule,
    NgbPaginationModule,
    MatFormFieldModule,
    FontAwesomeModule
  ],
  providers: [DataService,AuthGaurd,AuthGaurd1],
  bootstrap: [AppComponent]
})
export class AppModule { }
