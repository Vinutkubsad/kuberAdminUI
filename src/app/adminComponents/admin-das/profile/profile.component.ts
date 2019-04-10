import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public service: DataService, public route: Router ) { }

  ngOnInit() {
    this.adminProfile();
  }

  adminProfile(){
    this.service.getAdminProfile().subscribe((res)=>{
      console.log(res, 'profile');
    })
  }

}
