import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service';
import {NgbModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { AuthGaurd } from './services/AuthGuard.Admin';
import { AuthGaurd1 } from './services/AuthGuard.Charity';
// import { DataService } from '../app/data.service';
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';
import { NavBarComponent } from './adminComponents/nav-bar/nav-bar.component';
import { HomeComponent } from './adminComponents/home/home.component';
import { FooterComponent } from './adminComponents/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDasComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    NgbPaginationModule
    
  ],
  providers: [DataService,AuthGaurd,AuthGaurd1],
  bootstrap: [AppComponent]
})
export class AppModule { }
